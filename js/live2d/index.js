const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
)

window.addEventListener('load', () => {
  live2d.init({
    model: {
      // jsonPath: 'https://unpkg.com/live2d-widget-model-chitose@1.0.5/assets/chitose.model.json',
      // jsonPath: 'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json'
      // jsonPath: 'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
      // jsonPath: 'https://unpkg.com/live2d-widget-model-miku@1.0.5/assets/miku.model.json',
      jsonPath: 'https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json',
    },
    display: {
      superSample: 2,
      width: isMobile ? 120 : 280,
      height: isMobile ? 160 : 360,
      position: isMobile ? 'right' : 'left',
      hOffset: 0,
      vOffset: 0,
    },
    mobile: {
      show: true,
      scale: 1,
    },
  })
})
