function playBackgroundVideo() {
  const video = document.querySelector(".bg-video .video");
  if (!video) return;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
}

function initBackgroundVideo() {
  const video = document.querySelector(".bg-video .video");
  if (!video) return;

  playBackgroundVideo();

  video.addEventListener("loadeddata", playBackgroundVideo, { once: true });
  video.addEventListener("canplay", playBackgroundVideo, { once: true });

  const unlockOnGesture = () => {
    playBackgroundVideo();
    document.removeEventListener("touchstart", unlockOnGesture);
    document.removeEventListener("click", unlockOnGesture);
  };

  document.addEventListener("touchstart", unlockOnGesture, {
    once: true,
    passive: true,
  });
  document.addEventListener("click", unlockOnGesture, { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initBackgroundVideo();

  let timeline = new TimelineMax();

  timeline
    .fromTo(
      ".bg-loader",
      1,
      { width: "100%" },
      { width: "0%", delay: 5, ease: Expo.easeInOut }
    )
    .fromTo(
      ".bg-video",
      2,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        ease: Expo.easeInOut,
        onComplete: playBackgroundVideo,
      },
      "-=1"
    )
    .fromTo(
      ".logo",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".nav-list",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".nav-social",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".item-1",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".item-3",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".item-4",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".item-5",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    );
});
