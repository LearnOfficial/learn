import { View, Text } from 'react-native';
import { TaskItem } from '../components/TaskItem';
export function UnDoneTaskContainer() {
  const unDoneTasks = [
    {
      title: 'Search references about thermodynamic ',
      subject: {
        id: 1,
        title: 'Physics',
        color: '#DACEED'
      }
    },
    {
      title: 'Search libraries related to threats theory',
      subject: {
        id: 2,
        title: 'C programming language',
        color: '#EDCECE'
      }
    },
    {
      title: 'Write calculus introduction',
      subject: {
        id: 2,
        title: 'Mathematics',
        color: '#CEEDD3'
      }
    }
  ];
  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Today</Text>
        <Text>2/5</Text>
      </View>

      <View style={{ gap: 10 }}>
        {unDoneTasks.map((item) => {
          return <TaskItem title={item.title} subject={item.subject} />;
        })}
      </View>
    </View>
  );
}
