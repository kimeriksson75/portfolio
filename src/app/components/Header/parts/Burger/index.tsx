import type React from "react";
import styles from "../../../../styles/styles.module.scss";

type BurgerProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Burger({ open, setOpen }: BurgerProps) {
	return (
		<>
			<input
				className={styles.burgerWrapper}
				type="checkbox"
				checked={open}
				onChange={(e) => (e.target.checked ? setOpen(true) : setOpen(false))}
				id="burgerWrapper"
			/>
			<label className={styles.burger} htmlFor="burgerWrapper">
				<span className={styles.burgerLine} />
			</label>
		</>
	);
}

export default Burger;
