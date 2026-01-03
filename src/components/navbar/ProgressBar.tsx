
import React, { useEffect, useState } from "react";
import { getTokenData } from "../../utils/jwt";

interface ProgressBarProps {
	tokenKey?: string; // localStorage key for JWT
}


// XP needed to reach the next level (100 * next level)
function getXpForNextLevel(level: number) {
	return 100 * (level + 1);
}

const ProgressBar: React.FC<ProgressBarProps> = ({ tokenKey = "jwt" }) => {
	const [level, setLevel] = useState<number>(1);
	const [xp, setXp] = useState<number>(0);

	useEffect(() => {
		const token = localStorage.getItem(tokenKey);
		if (token) {
			const data = getTokenData(token);
			// Read lvl and xp from the token data (not level/xp)
			if (data && typeof data.lvl === "number" && typeof data.xp === "number") {
				setLevel(data.lvl);
				setXp(data.xp);
			}
		}
	}, [tokenKey]);


	const xpForNext = getXpForNextLevel(level);
	const percent = Math.min(100, Math.round((xp / xpForNext) * 100));
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div
			className="w-full flex items-center gap-1 select-none pr-0"
			style={{ padding: 0, margin: 0 }}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			<span className="text-xs font-bold text-white min-w-[32px] text-left">Lvl {level}</span>
			<div className="relative flex-1">
				<div className="w-full bg-white/20 rounded-full h-3">
					<div
						className="bg-gradient-to-r from-blue-400 to-white h-3 rounded-full transition-all duration-700"
						style={{ width: `${percent}%`, opacity: 0.85 }}
					></div>
				</div>
				{showTooltip && (
					<div className="absolute left-1/2 -translate-x-1/2 -top-8 bg-black text-white text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap z-10">
						XP: {xp} / {xpForNext} to Lvl {level + 1}
					</div>
				)}
			</div>
			<span className="text-xs font-bold text-white min-w-[32px] text-right mr-0">Lvl {level + 1}</span>
		</div>
	);
};

export default ProgressBar;
