<template>
  <div>
    <button @click="playPerfect">Play a sound</button>
    <button @click="playPercussion">Play a sound</button>
    <button @click="playPiano">Play a sound</button>
    <button @click="playTimbales">Play a sound</button>
    <button @click="playBass">Play a sound</button>
    <button @click="playBass2">Play a sound</button>
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
  setup() {
    const [playPerfect] = useSound(perfectSfx)
    const [playPercussion] = useSound(percussionSfx)
    const [playPiano] = useSound(pianoSfx)
    const [playTimbales] = useSound(timbalesSfx)
    const [playBass] = useSound(bassSfx)
    const [playBass2] = useSound(bass2Sfx)

    return {
      playPerfect, playPercussion,playPiano,playTimbales,playBass,playBass2
    }
  },
}
</script>
