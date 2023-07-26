import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest News in Tech</p>
      </div>
    </section>
  )
}

export default Sidebar