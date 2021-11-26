export const draw = (canvas) => {
    if (canvas) {
        //获取canvas上下文
        let ctx = canvas.getContext('2d');
 
        //创建video标签，并且设置相关属性
        let video = document.createElement('video');
 
        video.preload = true;
        video.autoplay = true;
        video.src='https://mdn.github.io/dom-examples/canvas/chroma-keying/media/video.mp4';
 
        //监听video的play事件，一旦开始，就把video逐帧绘制到canvas上
        video.addEventListener('play',() => {
            let play = () => {
                ctx.drawImage(video,0,0);
                requestAnimationFrame(play);
            };
 
            play();
        },false)
 
        //暂停/播放视频
        canvas.addEventListener('click',() => {
            if (!video.paused) {
                video.pause();
            } else {
                video.play();
            }
        },false);
    }
}