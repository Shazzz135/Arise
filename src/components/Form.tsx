
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HABIT_CATEGORIES, GOAL_TYPES, MAX_TITLE_LENGTH, PERIOD_OPTIONS, AREA_OPTIONS, MEASURE_OPTIONS_BY_AREA } from '../utils/Constants';
import Dropdown from './Dropdown';
import { createToken } from '../utils/jwt';

function Form() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [goalType, setGoalType] = useState<'number' | 'pass'>(GOAL_TYPES[1].value as 'number' | 'pass');
    const [goalValue, setGoalValue] = useState('');
    const [increment, setIncrement] = useState('');
    const [category, setCategory] = useState(HABIT_CATEGORIES[0]);
    const [customCategory, setCustomCategory] = useState('');
    const [area, setArea] = useState(AREA_OPTIONS[0].value);
    const [measure, setMeasure] = useState(MEASURE_OPTIONS_BY_AREA[AREA_OPTIONS[0].value][0].value);
    const [period, setPeriod] = useState(PERIOD_OPTIONS[0].value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Gather habit data from form
        const newHabit = {
            title,
            goalType,
            category: category === 'Other' ? customCategory : category,
            period,
            streak: 0,
            ...(goalType === 'number' ? {
                goalValue: Number(goalValue),
                increment: Number(increment),
                area,
                measure,
            } : {
                goalValue: null,
                increment: null,
                area: null,
                measure: null,
            })
        };

        // Get current token and habits
        const token = localStorage.getItem('arise_jwt');
        let user = 'ME';
        let lvl = 1;
        let xp = 0;
        let habits: any[] = [];
        if (token) {
            try {
                const decoded = JSON.parse(atob(token));
                const data = decoded.data || {};
                user = data.user || user;
                lvl = typeof data.lvl === 'number' ? data.lvl : lvl;
                xp = typeof data.xp === 'number' ? data.xp : xp;
                habits = Array.isArray(data.habits) ? data.habits : [];
            } catch {}
        }
        // Add new habit
        const updatedHabits = [...habits, newHabit];
        // Create new token with updated habits
        const newToken = createToken({ user, lvl, xp, habits: updatedHabits });
        localStorage.setItem('arise_jwt', newToken);
        // Redirect to home page
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-lg flex flex-col gap-3 w-full max-w-md mx-auto mt-20 mb-auto text-sm">
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
                    />
                    {category === 'Other' && (
                        <input
                            type="text"
                            className="p-1 rounded bg-white/20 text-white text-xs border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#7a0404] w-full h-[32px] ml-2"
                            placeholder="Other (max 16)"
                            maxLength={16}
                            value={customCategory}
                            onChange={e => setCustomCategory(e.target.value)}
                            required
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
                    <Dropdown
                        options={PERIOD_OPTIONS}
                        value={period}
                        onChange={setPeriod}
                        className="w-[120px] -ml-[2px] mr-2"
                    />
                </div>
                {goalType === 'number' && (
                    <div className="mt-2 flex gap-2">
                        <Dropdown
                            options={AREA_OPTIONS}
                            value={area}
                            onChange={val => {
                                setArea(val);
                                // Only set measure if options exist for the new area
                                const opts = MEASURE_OPTIONS_BY_AREA[val];
                                if (opts && opts.length > 0) {
                                    setMeasure(opts[0].value);
                                } else {
                                    setMeasure('');
                                }
                            }}
                            className="w-1/2"
                        />
                        {area !== 'unitless' && Array.isArray(MEASURE_OPTIONS_BY_AREA[area]) && MEASURE_OPTIONS_BY_AREA[area].length > 0 && (
                            <Dropdown
                                options={MEASURE_OPTIONS_BY_AREA[area]}
                                value={measure}
                                onChange={setMeasure}
                                className="w-1/2"
                            />
                        )}
                    </div>
                )}
            </div>
            {goalType === 'number' ? (
                <div className="flex flex-row gap-2">
                    <input
                        className="p-1 rounded bg-white/20 text-white placeholder:text-white/60 text-sm w-1/2"
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]*[.,]?[0-9]*"
                        value={increment}
                        onChange={e => setIncrement(e.target.value)}
                        required
                        placeholder="Step (e.g. 250)"
                        autoComplete="off"
                        aria-label="Step"
                    />
                    <input
                        className="p-1 rounded bg-white/20 text-white placeholder:text-white/60 text-sm w-1/2"
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]*[.,]?[0-9]*"
                        value={goalValue}
                        onChange={e => setGoalValue(e.target.value)}
                        required
                        placeholder="Goal (e.g. 2000)"
                        autoComplete="off"
                        aria-label="Goal"
                    />
                </div>
            ) : null}
            <button type="submit" className="mt-6 px-2 py-1 text-xs bg-[#7a0404] bg-opacity-50 text-white rounded-md font-semibold shadow hover:bg-[#7a0404] hover:bg-opacity-70 transition-colors duration-200 backdrop-blur-sm border border-white/40">Create</button>
        </form>
    );
}

export default Form;
