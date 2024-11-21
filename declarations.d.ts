declare module '*.jpg'; // JPG 파일에 대한 타입 선언
declare module '*.jpeg'; // JPEG 파일에 대한 타입 선언
declare module '*.gif'; // GIF 파일에 대한 타입 선언
declare module '*.png' {
  const value: any;
  export default value;
}
