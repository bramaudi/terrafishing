import { reactive, html, computed } from './minite.js'

const calc = (power) => (11 / (2.5 + (23/600) * power)).toFixed(1)

const Icon = () => html`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEUAAAAAR3oGEjwAfboAs/+c7v903f95LVjMYaj///96hArnAAAAAXRSTlMAQObYZgAAAAFiS0dECfHZpewAAAAHdElNRQfkCBMRNTs9A6JRAAAAAW9yTlQBz6J3mgAAAGhJREFUGNNl0FENACEMA9BZqIVZqIVawMJZwAKyr0DIHbAP2EsaBkS4AGSs+gEgxcwL7ssjcSR3sPRYvQA3reoZuR0qrPQCHsiekI8WTsC73Xgi0vPseZ0dHisSNyJNt/OlGzrz+52FF1tqK/dugXNcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA4LTE5VDE3OjUzOjU5KzAwOjAw+IQFMgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOC0xOVQxNzo1Mzo1OSswMDowMInZvY4AAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMjTYjGyAAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADI0ICOsDQAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk3ODU5NjM57q2zQQAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANXRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTk0MDQ5MjcyNjMwNzcwOTc3MmG5/mIAAAAASUVORK5CYII=" alt="Master Bait" />`

const App = () => {
  const [fishPower, setFishPower] = reactive(0)
  const expectedCatch = computed(n => calc(n.value), fishPower)
  const inputNumber = e => {
    let { value } = e.target
    value = Number.isInteger( parseInt(value) ) ? value : 0
    setFishPower(value)
  }
  return html`
    <div class="container">
      <header>
        <${Icon} />
        TerraFishing
      </header>
      <div>Fishing power: <span class="power">${fishPower} %</span></div>
      <div>Expect catch every: <span class="catch">${expectedCatch} seconds</span></div>
      <input
        type="number"
        placeholder=0
        oninput=${inputNumber}
        />
      </div>
  `
}

document.getElementById('app').append(App())