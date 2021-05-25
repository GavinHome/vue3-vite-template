import { defineComponent } from 'vue'
import Logo from '@/assets/logo.png'

export default defineComponent({
  name: 'logo-tsx',
  setup() {
    return () => (
      <>
        <div class="logo-tsx">
          <img src={Logo} alt="logo" width="30" style="margin:0px 10px" />
          {import.meta.env.VITE_APP_TITLE}
        </div>
      </>
    )
  }
})
