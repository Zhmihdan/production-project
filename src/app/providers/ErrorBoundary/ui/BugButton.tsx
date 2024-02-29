import { FC, useEffect, useState } from "react";
import Button from "shared/ui/Button/Button";

// Тестировочный компонент
const BugButton: FC = () => {
	const [isError, setIsError] = useState<boolean>(false);

	const throwError = () => {
		setIsError(true);
	};

	useEffect(() => {
		if (isError) {
			throw new Error("CABOOM");
		}
	}, [isError]);

	// eslint-disable-next-line i18next/no-literal-string
	return <Button onClick={() => throwError()}>throw error</Button>;
};

export default BugButton;