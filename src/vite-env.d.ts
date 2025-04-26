/// <reference types="vite/client" />
declare module "react-simple-captcha" {
	export function loadCaptchaEnginge(length: number): void;
	export function LoadCanvasTemplate(): JSX.Element;
}