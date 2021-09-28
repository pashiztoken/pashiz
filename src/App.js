import * as THREE from 'three'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { useTransition, a } from 'react-spring'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, draco } from 'drei'
import logo from './logoNew.png';
import './menu.css'




function Model({ url }) {
  const { nodes, materials } = useLoader(GLTFLoader, url, draco());
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={[7, 7, 7]}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh castShadow receiveShadow geometry={nodes.planet001.geometry} material={materials.scene} />
        <mesh castShadow receiveShadow geometry={nodes.planet002.geometry} material={materials.scene} />
      </group>
    </group>
  )
}

function Loading() {
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200)
  }, []);

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width },
  });

  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <a.div className="loading" key={key} style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width }} />
          </div>
        </a.div>
      ),
  )
}


function shoot() {
    document.getElementById("toggle").style.display="block";
}

export default function App() {

    return (
    <>
      <div className="bg" />
      <h1>
        Baby Doge Coin
      </h1>
        <img src={logo} alt="Logo" />
        <div id="toggle" className="toggle">
            <h5>REWARDS TRACKER</h5>
            <p>Enter your BabyDoge wallet address below to get started.</p>
            <div className="card-body">
                <div className="row">
                    <input placeholder="0xAABB..." className="input" value=""/>
                </div>
                <div className="row">
                    <button type="button" className="button">START TRACKING</button>
                </div>
            </div>
            <p>
                Refreshing the page will cause it to lose your stats this data is not stored in our server, it is fetched directly from the network in real-time. This tool is for educational purposes only and we do not guarantee accurate data. Do not make decisions based off data presented. Baby Doge LLC nor any of its community or members will be responsible for any use, misuse, or decisions made from tracker
            </p>
        </div>
        <div className="menu">
            <div className="grain"></div>
            <div className="intro">
                <div className="center">
                    <div className="core"></div>
                    <div className="outer_one">
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                        <div className="outer_one__piece"></div>
                    </div>
                    <div className="outer_two">
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                        <div className="outer_two__piece"></div>
                    </div>
                    <div className="outer_three">
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                        <div className="outer_three__piece"></div>
                    </div>
                    <div className="outer_four">
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                        <div className="outer_four__piece"></div>
                    </div>
                    <div className="outer_five">
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                        <div className="outer_five__piece"></div>
                    </div>
                    <div className="pieces" >
                        <div className="future_ui__piece" onClick={shoot}>
                            <span>Track</span>
                            <div className="line"></div>
                            <div className="tip">
                                Award Tracker
                            </div>
                        </div>
                        <div className="future_ui__piece">
                            <span>Wallet</span>
                            <div className="line"></div>
                            <div className="tip">
                                Debit Card
                            </div>
                        </div>
                        <div className="future_ui__piece">
                            <span>Swap</span>
                            <div className="line"></div>
                            <div className="tip">
                                Swap
                            </div>
                        </div>
                        <div className="future_ui__piece">
                            <span>Exchange</span>
                            <div className="line"></div>
                            <div className="tip">
                                 Trade
                            </div>
                        </div>
                        <div className="future_ui__piece">
                            <span>NFT</span>
                            <div className="line"></div>
                            <div className="tip">
                                 Marketplace
                            </div>
                        </div>
                        <div className="future_ui__piece">
                            <span>Game</span>
                            <div className="line"></div>
                            <div className="tip">
                                Arcade
                            </div>
                        </div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                        <div className="future_ui__piece blank"></div>
                    </div>
                </div>
            </div>
        </div>

      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={['#cc7b32', 16, 20]} />
        <Suspense fallback={null}>
          <Model url="/scene-draco.gltf" />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      <div className="layer" />

      <Loading />

    </>
  )
}



