'use client'
import Head from 'next/head'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'
import test from '../../../../geoJSON.json'

export default function MapPage() {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_URL_MAPBOX ?? ''
  const mapContainer = useRef('map')
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  // const Map = new mapboxgl.Map({
  //   container: 'map', // container ID
  //   style: 'mapbox://styles/mapbox/streets-v12', // style URL
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9, // starting zoom
  // })

  useEffect(() => {
    if (map.current) return
    const mapLoaded = (map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom,
    }))

    mapLoaded.on('load', () => {
      mapLoaded.addSource('earthquakes', {
        type: 'geojson',
        data: '../../../../geoJSON.json',
      })

      mapLoaded.addLayer({
        id: 'maine',
        type: 'fill',
        source: 'maine', // reference the data source
        layout: {},
        paint: {
          'fill-color': '#0080ff', // blue color fill
          'fill-opacity': 0.5,
        },
      })
    })
  }, [])

  return (
    <main className="w-full flex z-0">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className="w-28" />
      <div className="h-[75vh] w-full mt-16">
        <h1 className="text-2xl font-semibold my-8 ml-10">
          Regiões de entrega
        </h1>
        <div className="h-full w-full">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <div ref={mapContainer} className="h-full rounded-md" />
        </div>
      </div>
      <div className="w-16" />
    </main>
  )
}
