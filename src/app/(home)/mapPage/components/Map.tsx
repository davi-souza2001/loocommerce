'use client'
import Head from 'next/head'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef } from 'react'
import coordinates from '@/../../geoJSON.json'

export function Map() {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_URL_MAPBOX ?? ''
  const mapContainer = useRef('map')
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return
    const mapLoaded = (map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-60.1245, 5.1619],
      zoom: 5,
    }))

    mapLoaded.on('load', () => {
      mapLoaded.addSource('guyana', {
        type: 'geojson',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data: coordinates,
      })

      mapLoaded.addLayer({
        id: 'guyana',
        type: 'fill',
        source: 'guyana',
        layout: {},
        paint: {
          'fill-color': '#5B4DA7',
          'fill-opacity': 0.5,
        },
      })
    })
  }, [])

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <div ref={mapContainer} className="h-full rounded-md" />
    </>
  )
}
