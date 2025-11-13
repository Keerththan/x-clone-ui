"use client"
import { Image } from '@imagekit/next';
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType={
    src:string;
    w?:number;
    h?:number;
    alt:string;
    className?:string;
    tr?:boolean

}
const Images = ({src,w,h,alt,className,tr}:ImageType) => {
  return (
    <div>
      <Image
        urlEndpoint={urlEndpoint}
        src={src}
        width={w}
        height={h}
        alt={alt}
        {...(tr?{transformation:[{ width:`${w}`, height:`${h}` }]}:{width:w,height:h})}

        className={className}
      />
    </div>
  )
}

export default Images;
