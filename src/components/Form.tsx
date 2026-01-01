
import { useState } from 'react';
import { HABIT_CATEGORIES, GOAL_TYPES, INCREMENT_OPTIONS, MAX_TITLE_LENGTH, DEFAULT_INCREMENT, MEASURE_OPTIONS, PERIOD_OPTIONS } from '../utils/Constants';
import Dropdown from './Dropdown';

function Form() {
    const [title, setTitle] = useState('');
    const [goalType, setGoalType] = useState<'number' | 'pass'>(GOAL_TYPES[1].value as 'number' | 'pass');
    const [goalValue, setGoalValue] = useState('');
    const [increment, setIncrement] = useState('');
    const [category, setCategory] = useState(HABIT_CATEGORIES[0]);
    const [measure, setMeasure] = useState(MEASURE_OPTIONS[0].value);
    const [period, setPeriod] = useState(PERIOD_OPTIONS[0].value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Title: ${title}\nGoal: ${goalType === 'number' ? goalValue : 'Pass'}${goalType === 'number' ? `\nIncrement: ${increment}` : ''}`);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg flex flex-col gap-3 w-full max-w-md mx-auto mt-20 mb-auto text-sm">
            <h2 className="text-2xl font-bold text-white mb-2 text-center pt-4">Create New Habit</h2>
            <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-semibold pt-3 uppercase tracking-wide" htmlFor="habit-title">Title</label>
                <input
                    id="habit-title"
                    className="p-1 rounded bg-white/20 text-white placeholder:text-white/60 text-sm"
                    maxLength={MAX_TITLE_LENGTH}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                    placeholder="e.g. Drink Water"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-semibold pt-3 uppercase tracking-wide">Category</label>
                <div className="flex items-end gap-2">
                    <Dropdown
                        options={HABIT_CATEGORIES.map(cat => ({ value: cat, label: cat }))}
                        value={category}
                        onChange={setCategory}
                        colorIndex={2}
                    />
                    {category === 'Other' && (
                        <input
                            type="text"
                            className="p-1 rounded bg-white/20 text-white text-xs border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#7a0404] w-full h-[32px] ml-2"
                            placeholder="Other (max 16)"
                            maxLength={16}
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-white text-xs font-semibold mb-1 text-left pt-3 uppercase tracking-wide">Goal</label>
                <div className="flex gap-4 items-center justify-start">
                    {GOAL_TYPES.map((type) => (
                        <label key={type.value} className="text-white flex items-center gap-1">
                            <input
                                type="radio"
                                name="goalType"
                                value={type.value}
                                checked={goalType === type.value}
                                onChange={() => setGoalType(type.value as 'number' | 'pass')}
                            />
                            {type.label}
                        </label>
                    ))}
                </div>
                <div className="mt-2 flex gap-2">
                    <Dropdown
                        options={PERIOD_OPTIONS}
                        value={period}
                        onChange={setPeriod}
                        colorIndex={4}
                        className="w-1/2"
                    />
                    <Dropdown
                        options={MEASURE_OPTIONS}
                        value={measure}
                        onChange={setMeasure}
                        colorIndex={3}
                        className="w-1/2"
                    />
                </div>
            </div>
            {goalType === 'number' ? (
                <div className="flex flex-row gap-2">
                    <input
                        className="p-1 rounded bg-white/20 text-white placeholder:text-white/60 text-sm w-1/2"
                        type="number"
                        value={goalValue}
                        onChange={e => setGoalValue(e.target.value)}
                        required
                        placeholder="e.g. 2000 (Goal)"
                    />
                    <input
                        className="p-1 rounded bg-white/20 text-white placeholder:text-white/60 text-sm w-1/2"
                        type="number"
                        value={increment}
                        onChange={e => setIncrement(e.target.value)}
                        required
                        placeholder="e.g. 250 (Increment)"
                    />
                </div>
            ) : null}
            <button type="submit" className="mt-6 px-2 py-1 text-xs bg-[#7a0404] bg-opacity-50 text-white rounded-md font-semibold shadow hover:bg-[#7a0404] hover:bg-opacity-70 transition-colors duration-200 backdrop-blur-sm border border-white/40">Create</button>
        </form>
    );
}

export default Form;
