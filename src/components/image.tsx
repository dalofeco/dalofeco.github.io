import React, { useState } from "react"
import EXIF from 'exif-js';
import { PhotoMetadataType } from "../types/photo";
import { getEXIF } from "../utils/exif";
import Loading from "./Loading";

interface ImageProps {
	src: string;
	id: string;
	className?: string;
	onLoad?: Function;
	onClick?: any;
	meta?: boolean;
}


const Image = ({src, id, className, onLoad, onClick, meta=false}: ImageProps) => {

	const [loading, setLoading] = useState(true);

	const onImageLoad = (e) => {

		// Unset loading state
		setLoading(false);

		if (e && e.target) {

			// Get image element
			if (meta) {

				const {id} = e.target;
				const imageElement = document.getElementById(id);
				if (!imageElement) return;

				// Get EXIF and update state
				getEXIF(imageElement).then((photoMetadata : PhotoMetadataType) => {
					if (onLoad) onLoad(photoMetadata);
				}).catch(err => alert(err));

			} else if (onLoad) onLoad();
		}
	}

	return (
		<div className="FlexRowContainer">
			<img id={id} className={className} src={src} onLoad={onImageLoad} onClick={onClick} style={{'display': loading ? 'none' : 'unset'}}/>
			<Loading className={className} style={{'display': loading ? 'unset' : 'none'}}/>
		</div>
	)
}

export default Image;
