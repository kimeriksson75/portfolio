import Player from "@vimeo/player";
import React, { useEffect, useRef } from "react";

type Props = {
	id?: number;
	width?: number;
	height?: number;
	autoPlay?: boolean;
	loop?: boolean;
};

export default function VimeoDefaultPlayer({
	id = 53090870,
	width,
	height,
	autoPlay = false,
	loop,
}: Props) {
	const playerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const options = {
			id: id,
			loop: loop,
			autoPlay: autoPlay,
			width: width,
			height: height,
		};

		if (playerRef.current !== null) {
			const player = new Player(playerRef.current, options);

			player.on("play", () => {
				console.log("play");
			});
		}
	}, [id, width, height, autoPlay, loop]);

	return (
		<div>
			<div ref={playerRef} />
		</div>
	);
}
