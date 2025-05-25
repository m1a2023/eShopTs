import { useNavigate } from "react-router";
import BaseButton from "./BaseButton";
import type { JSX } from "react";
import SVGImage_Java from "../../assets/java";

type HeaderProps = {
	title?: string;
	isSignedIn: boolean;
	setSignedIn: (isi: boolean) => void;
};

function Header({ isSignedIn, setSignedIn, title }: HeaderProps): JSX.Element {
	const navigate = useNavigate();

	return (
		<>
			<header className="fixed top-0 left-0 w-full h-[5em] p-4 z-50 bg-green-700 shadow-md flex items-center justify-between">
				<div className="inline-flex gap-2">
					<SVGImage_Java
						color={"#FFFFFF"}
						height={2.4}
						width={2.4}
						viewBox="0 0 305 305"
					/>
					<span className={`${title === "" ? "hidden" : ""} text-3xl`}>
						{title}
					</span>
				</div>
				<div className="flex gap-4">
					{isSignedIn ? (
						<>
							<BaseButton
								title={"in"}
								text={"Sign in"}
								action={() => {
									navigate("/auth");
									setSignedIn(!isSignedIn);
								}}
							/>
							<BaseButton
								title={"up"}
								text={"Sign up"}
								action={() => {
									navigate("/auth");
									setSignedIn(!isSignedIn);
								}}
							/>
						</>
					) : (
						<BaseButton
							title={"out"}
							text="Sign out"
							action={() => {
								navigate("/");
								setSignedIn(!isSignedIn);
							}}
						/>
					)}
				</div>
			</header>
		</>
	);
}

export default Header;
