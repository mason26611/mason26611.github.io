const gameFullscreenStyle = "position: fixed; top: 0; width: 100%; height: 95%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 25;";
const iframeBarStyle = "position: fixed; background: rgba(26, 26, 26, 1); bottom: 0; width: 100%; height: 5%; z-index: 50;";

let isOpen = false;
function openHamburgerMenu() {
	const mobileNav = document.getElementById("mobile-nav");
	
	isOpen ? mobileNav.style.display = "none" : mobileNav.style.display = "block";
	isOpen = !isOpen;
}

let isFullscreen = false;
function fullscreenGame() {
	const gameIFrame = document.getElementById("game");
	const iframeBar = document.getElementById("iframe-bar");

	isFullscreen ? gameIFrame.style.cssText = "" : gameIFrame.style.cssText = gameFullscreenStyle;
	isFullscreen ? iframeBar.style.cssText = "" : iframeBar.style.cssText = iframeBarStyle;
	isFullscreen = !isFullscreen;
}