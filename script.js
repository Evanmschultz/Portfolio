/* Credit for most of the Lorenz attractor goes to Gary Ang - https://github.com/playgrdstar/lorenz_threejs */

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Set element variables */
//////////////////////////////////////////////////////////////////////////////////////////////////

const logoElements = document.querySelectorAll('.logo')
const linkElements = document.querySelectorAll('.link')
const hrElement = document.querySelector('hr')
const extLinks = document.querySelector('.ext-links')
const myCanvas = document.getElementById('myCanvas')
const main = document.querySelector('main')

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Logic for text and link animation on page load */
//////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
	const initialDelay = 3000
	const iterativeDelay = 500

	// Initially set main size and base canvas size off of main size
	setCanvasSize()
	setTimeout(() => {
		main.classList.add('loaded')
	}, iterativeDelay)

	// Loop through node list header/logo elements and animate from top to bottom
	logoElements.forEach((item, index) => {
		setTimeout(() => {
			item.classList.add('slide-in')
		}, index * iterativeDelay + initialDelay) // setTimeout based on index
	})

	// Loop through node list header/link elements and animate from top to bottom
	linkElements.forEach((item, index) => {
		setTimeout(() => {
			item.classList.add('slide-in')
		}, index * iterativeDelay + initialDelay)
	})

	// Animate header/hr element
	setTimeout(() => {
		hrElement.classList.add('fade-in')
	}, initialDelay)

	// Loop through node list of ext-links and animate together
	setTimeout(() => {
		extLinks.classList.add('slide-in')
	}, iterativeDelay * 3)
}

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Set event listener and logic to resize main and canvas when the screen size changes */
//////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener(
	'resize',
	function () {
		// Adjust camera
		camera.aspect = myCanvas.clientWidth / myCanvas.clientHeight
		camera.updateProjectionMatrix()

		// Resize the renderer
		renderer.setSize(myCanvas.clientWidth, myCanvas.clientHeight)

		// Resize main and resize canvas off of main
		setCanvasSize()
	},
	false
)

function setCanvasSize() {
	// Update main and canvas size by window width and reduce it by a percentage
	main.style.width = `${window.innerWidth - (window.innerHeight * 8) / 100}px`
	main.style.height = `${
		window.innerHeight - (window.innerHeight * 8) / 100
	}px`

	// Update canvas size to match main's size
	myCanvas.style.width = main.style.width
	myCanvas.style.height = main.style.height
}

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Lorenz attractor necessary logic and animation settings */
//////////////////////////////////////////////////////////////////////////////////////////////////

// Set up the scene
let scene = new THREE.Scene()

// Set up a camera
let camera = new THREE.PerspectiveCamera(
	100,
	myCanvas.clientWidth / myCanvas.clientHeight,
	0.1,
	50
)
camera.position.z = 22

// Set up the renderer. This will be called later to render scene with the camera setup above
let renderer = new THREE.WebGLRenderer({
	antialias: true,
	canvas: myCanvas // Pass the canvas element to the renderer
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(myCanvas.clientWidth, myCanvas.clientHeight)
renderer.setClearColor(0x111111, 1)
scene.background = new THREE.Color('#000')

// Setting up a light
let light = new THREE.PointLight('#9BC995', 1, 10000)
light.position.set(0, 0, 0)
scene.add(light)

// Setting up a group to hold the items we will be creating together
let group = new THREE.Group()

/* 
    Array curve holds the positions of points generated from a lorenz equation; 
    lorenz function below generates the points and returns an array of points 
    */
let arrayCurve = lorenz()

// Generating the geometry
let curve = new THREE.CatmullRomCurve3(arrayCurve)
let geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(100000))

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Set up point cloud */
//////////////////////////////////////////////////////////////////////////////////////////////////

// Set values defining point material/appearance
let pointCloudMaterial = new THREE.PointsMaterial({
	color: new THREE.Color(0x999ccc),
	transparent: true,
	size: 0.05,
	blending: THREE.AdditiveBlending
})

// Set up point cloud
let pointCloud = new THREE.Points(geometry, pointCloudMaterial)
pointCloud.sizeAttenuation = true
pointCloud.sortPoints = true
group.add(pointCloud)
scene.add(group)

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Render function */
//////////////////////////////////////////////////////////////////////////////////////////////////
let step = 0
let render = function () {
	renderer.render(scene, camera)
	requestAnimationFrame(render)

	//Varying the points on each frame
	step += 0.01
	let geometry = pointCloud.geometry
	let a = 0.9 + Math.random() * 6
	let b = 3.4 + Math.random() * 7
	let f = 9.9 + Math.random() * 8
	let g = 1 + Math.random()
	let t = 0.001

	let positions = geometry.attributes.position.array

	for (let i = 0; i < positions.length; i += 3) {
		let x = positions[i]
		let y = positions[i + 1]
		let z = positions[i + 2]
		positions[i] = x - t * a * x + t * y * y - t * z * z + t * a * f
		positions[i + 1] = y - t * y + t * x * y - t * b * x * z + t * g
		positions[i + 2] = z - t * z + t * b * x * y + t * x * z
	}
	geometry.attributes.position.needsUpdate = true

	group.rotation.x += 0.01
	group.rotation.y += 0.02
	group.rotation.z += 0.01
}

// call render function
render()

//////////////////////////////////////////////////////////////////////////////////////////////////
/* Lorenz attractor function */
//////////////////////////////////////////////////////////////////////////////////////////////////
function lorenz() {
	let arrayCurve = []
	let x = 0.1,
		y = 0.1,
		z = 0.1
	let a = 0.2
	let b = 3.4
	let f = 9.9
	let g = 1
	let t = 0.001
	for (i = 0; i < 100000; i++) {
		x = x - t * a * x + t * y * y - t * z * z + t * a * f
		y = y - t * y + t * x * y - t * b * x * z + t * g
		z = z - t * z + t * b * x * y + t * x * z
		arrayCurve.push(new THREE.Vector3(x, y, z).multiplyScalar(1))
	}
	return arrayCurve
}
