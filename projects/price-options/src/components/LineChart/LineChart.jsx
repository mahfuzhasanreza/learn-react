import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarks = [
        { "id": 1, "name": "Alice", "math": 78, "physics": 82, "chemistry": 79 },
        { "id": 2, "name": "Bob", "math": 85, "physics": 78, "chemistry": 88 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 91, "chemistry": 85 },
        { "id": 4, "name": "David", "math": 74, "physics": 76, "chemistry": 72 },
        { "id": 5, "name": "Eve", "math": 88, "physics": 84, "chemistry": 90 },
        { "id": 6, "name": "Frank", "math": 67, "physics": 73, "chemistry": 69 },
        { "id": 7, "name": "Grace", "math": 95, "physics": 89, "chemistry": 92 },
        { "id": 8, "name": "Hank", "math": 81, "physics": 80, "chemistry": 77 },
        { "id": 9, "name": "Ivy", "math": 90, "physics": 86, "chemistry": 91 },
        { "id": 10, "name": "Jack", "math": 76, "physics": 79, "chemistry": 75 }
    ];

    return (
        <div>
            <LChart width={800} height={400} data={mathMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;