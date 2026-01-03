
import { useEffect, useState } from 'react';
import { getTokenData } from '../utils/jwt';

function Habits() {
    const [habits, setHabits] = useState<any[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('arise_jwt');
        if (token) {
            const data = getTokenData(token);
            if (data && Array.isArray(data.habits)) {
                setHabits(data.habits);
            }
        }
    }, []);



    return (
        <div className="w-full max-w-md mx-auto mt-6">
            <ul className="space-y-2">
                {habits.map((habit, idx) => (
                    <li key={idx} className="bg-white/10 border border-white/20 rounded p-3 text-white flex flex-col">
                        <span className="font-semibold">{habit.title}</span>
                        <span className="text-xs">Category: {habit.category}</span>
                        <span className="text-xs">Type: {habit.goalType}</span>
                        {habit.goalType === 'number' && (
                            <>
                                <span className="text-xs">Step: {habit.increment}</span>
                                <span className="text-xs">Goal: {habit.goalValue}</span>
                                <span className="text-xs">Area: {habit.area}</span>
                                <span className="text-xs">Measure: {habit.measure}</span>
                            </>
                        )}
                        <span className="text-xs">Period: {habit.period}</span>
                        <span className="text-xs">Streak: {habit.streak}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Habits;