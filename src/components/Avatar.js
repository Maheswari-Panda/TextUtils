import { getImageInfo } from "./utils";

export default function Avatar({album, size = 150}){
    return (
      <>
      <div>  
        <img
            className="avatar"
            src={album.ImgUrl}
            alt={album.name}
            width={size}
            height={size}
          />
        <p className="text-center">{getImageInfo(album,size)}</p>
      </div>
      </>
    );
  }