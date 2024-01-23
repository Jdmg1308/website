import * as THREE from 'three';

let scene, camera, renderer

const width = window.innerWidth, height = window.innerHeight;

// init
function init () {
	
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xdddddd);
	
	camera = new THREE.PerspectiveCamera(40, width / height, 1, 5000);

	hlight = new new THREE.AmbientLight (0x404040, 100);
	scene.add(hlight);

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( width, height );
	document.body.appendChild(renderer.domElement);

	let loader = new THREE.GLTFLoader();
	loader.load('Model/scene.gltf', function(gltf){
		car = gltf.scene.children[0];
		car.scale.set(0.5,0.5,0.5);
		scene.add(gltf.scene);
		animate();
	});
}

init();

//camera.position.z = 1;
//
//const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
//const material = new THREE.MeshNormalMaterial();
//
//const mesh = new THREE.Mesh( geometry, material );
//scene.add( mesh );
//
//
//renderer.setAnimationLoop( animation );
//
//// animation
//
//function animation( time ) {
//
//	mesh.rotation.x = time / 2000;
//	mesh.rotation.y = time / 1000;
//
//	renderer.render( scene, camera );
//
//}