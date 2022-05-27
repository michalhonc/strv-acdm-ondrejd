import type { FC } from 'react'

export const Card: FC = () => (
  <article style={{ border: '1px solid black' }}>
    <time dateTime="2008-02-14 20:00"> May 26, 2022 - 11:53 AM</time>
    <h3>Valentines day!!!</h3>
    <p>Ondrej D</p>
    <p>
      If you have ever felt confused then you are not alone. I will show you the
      way.
    </p>
    <p>
      11 <span>of</span> 10
    </p>
    <button type="button">CTA</button>
  </article>
)
