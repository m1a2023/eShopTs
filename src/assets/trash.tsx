import type { SVGProps } from "./SvgProps";

const SVGImage_Trash = ({
	color,
	height,
	width,
	viewBox = "-0.5 0 19 19",
}: SVGProps) => {
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={width}
				height={height}
				viewBox={viewBox}
				color={color}
			>
				<title>icon/18/icon-delete</title>
				<desc>Created with Sketch.</desc>
				<defs></defs>
				<g
					id="out"
					stroke="none"
					stroke-width="1"
					fill="none"
					fill-rule="evenodd"
				>
					<path
						d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"
						id="path"
						fill={color}
					></path>
				</g>
			</svg>
		</>
	);
};

export default SVGImage_Trash;
