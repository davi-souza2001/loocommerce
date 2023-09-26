'use client'
import Head from 'next/head'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function MapPage() {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic29uZXJvIiwiYSI6ImNsbjBmcHk0ODFudnQyanQzeHhjajVlajUifQ.OZKrFSp_zAH2O0FCt51-ng',
  })

  return (
    <main className="w-full flex z-0">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className="w-28" />
      <div className="w-full mt-16 bg-red-500">
        <h1 className="text-2xl font-semibold my-8 ml-10">
          Regiões de entrega
        </h1>
        <div className="h-[30rem] w-full bg-red-500">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '100%',
              width: '100%',
            }}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ 'icon-image': 'marker-15' }}
            >
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
          </Map>
        </div>
      </div>
      <div className="w-16" />
    </main>
  )
}
