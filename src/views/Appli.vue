<template>
  <div>
    <button @click="playPerfect"><img class="image" src="https://media.ultratop.be/cover/big/ed_sheeran-perfect_s.jpg" /></button>
    <button @click="playPercussion"><img class="image" src="https://www.thomann.de/blog/wp-content/uploads/2017/05/10805740_800.jpg" /></button>
    <button @click="playPiano"><img class="image" src="https://d1aeri3ty3izns.cloudfront.net/media/49/499349/600/preview.jpg" /></button>
    <button @click="playTimbales"><img class="image" src="https://mjcgex.fr/wp-content/uploads/2019/06/balafon-cours-300x167.jpg" /></button>
    <button @click="playBass"><img class="image" src="https://www.woodbrass.com/images/SQUARE400/woodbrass/ROLAND+HANDSONIC+HPD20.JPG" /></button>
    <button @click="playBass2"><img class="image" src="https://thumbs.static-thomann.de/thumb/orig/pics/bdb/416099/13471951_800.jpg" /></button>
    
    <button @click="audio"><img class="image" src="https://thumbs.static-thomann.de/thumb/orig/pics/bdb/416099/13471951_800.jpg" /></button>

    <av-bars
      caps-color="#FFF"
      :bar-color="['#f00', '#ff0', '#0f0']"
      canv-fill-color="#000"
      :caps-height="2"
      audio-src=playPerfect
    ></av-bars>

    <div class="form-group row">
      <label for="Audio" class="col-2 col-form-label labelTop">Audio</label>
      <div class="col-1">
        <button @click="recordAudio()" type="button" id="button_record" class="btn btn-danger">
        Enregistrer</button>
        <button type="button" id="button_stop" class="btn btn-success" @click="stop">
        Arreter</button>
        <div id="audio" class="audio" controls>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import useSound from 'vue-use-sound'
import perfectSfx from '../assets/perfect.mp3'
import percussionSfx from '../assets/percussion.mp3'
import pianoSfx from '../assets/piano.mp3'
import timbalesSfx from '../assets/timbales.mp3'
import bassSfx from '../assets/bass.mp3'
import bass2Sfx from '../assets/bass2.mp3'


export default {
  data(){
    return{
      showHasan:true,
      recorder:null
    }
  },
  methods:{
    myMethod(){
      showHasan = false
    },      
    recordAudio() {
      var device = navigator.mediaDevices.getUserMedia({ audio: true });
      device.then((stream) => {
        // use this!
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
           // ....
        };
      });
    },    
    stop() {
      this.recorder.stop()
    }
    
  },

  setup() {
    const [playPerfect] = useSound(perfectSfx)
    const [playPercussion] = useSound(percussionSfx)
    const [playPiano] = useSound(pianoSfx)
    const [playTimbales] = useSound(timbalesSfx)
    const [playBass] = useSound(bassSfx)
    const [playBass2] = useSound(bass2Sfx)
    const [audio] = useSound(MediaRecorder)
    

    return {
      playPerfect, playPercussion,playPiano,playTimbales,playBass,playBass2,audio,
    }
  },
}
</script>

<style scoped>
  .image {
  width: 250px;
  max-width: 100%;
  display: flex;
  }
  #button_record {
    width:200px;
    height:200px;
    font-size: 2em;
    margin-top: 20px;

  }
  #button_stop {
    width:200px;
    height:200px;
    font-size: 2em;
    margin-top: 20px;

  }
  .form-group {
    margin-top: 50px;
  }
</style>