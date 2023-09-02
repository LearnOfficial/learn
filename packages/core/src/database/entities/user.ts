import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation, Repository } from "typeorm";
import { IUser } from "@learn/common/entities/user"
import { Subject } from "./subject";
import { IUserLogInInput, IUserSignUpInput } from "@learn/common/schemas/user";
import { DatabaseDataSource } from "../data_source";

@Entity()
export class User implements IUser {
	private repository: Repository<User>;

	@PrimaryGeneratedColumn()
	id?: number | undefined;

	@OneToMany(() => Subject, (subject) => subject.user)
	subjects: Relation<Subject[]>;

	@Column()
	username: string;

	@Column()
	password?: string;

	@Column({ nullable: true })
	photo: string;

	@Column()
	email: string;

	constructor(userSignUpInput?: IUserSignUpInput) {
		if (userSignUpInput) {
			Object.assign(this, userSignUpInput);
		}
		this.repository = DatabaseDataSource.getRepository(User);
	}

	async findByUsernameAndPassword(userLogInInput: IUserLogInInput): Promise<boolean>{
		const user = await this.repository.findOneBy(userLogInInput);
		Object.assign(this, user)
		if(this?.id){
			return true;
		}

		return false;
	}

	async signUp(): Promise<boolean>{
		// Sign up if the user don't registered previoulsy
		const user = await this.repository.findOneBy({
			username: this.username
		});

		Object.assign(this, user);

		if (!this?.id) {
			await this.repository.save(this);
			return true;
		}
		return false;
	}
}
