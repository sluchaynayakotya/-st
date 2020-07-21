Smalltalk createPackage: 'Snakegame'!
(Smalltalk packageAt: 'Snakegame' ifAbsent: [ self error: 'Package not created: Snakegame' ]) imports: {'amber/web/Web'. 'amber/web/Web-JQuery'. 'silk/Silk'}!
Object subclass: #Apple
	slots: {#coord}
	package: 'Snakegame'!

!Apple methodsFor: 'behavior'!

teleportWhere: map is: value
	"Chooses free space on map and teleports apple there."

	| coords |
	coords := Array new.
	1 to: (map size) do: [ :y |
		1 to: ((map at: y) size) do: [ :x |
			((map at: y) at: x) = value ifTrue: [
				coords add: (Coord new x: x y: y)
			]
		]
	].
	coords size > 0 ifTrue: [ coord := coords at: coords size atRandom ]
! !

!Apple methodsFor: 'getters'!

coord
	^coord
! !

!Apple methodsFor: 'initialization'!

init: newcoord
	"Initializes the apple."

	|  |
	coord := newcoord.
	^self
! !

!Apple class methodsFor: 'not yet classified'!

new: newcoord
	"comment stating purpose of message"

	|  |
	^self new init: newcoord.
! !

Object subclass: #Coord
	slots: {#xvalue. #yvalue}
	package: 'Snakegame'!

!Coord methodsFor: 'getters'!

xvalue
	^xvalue
!

yvalue
	^yvalue
! !

!Coord methodsFor: 'operations'!

add: coord
	"Adds coordinates together."

	| |
	xvalue := xvalue + coord xvalue.
	yvalue := yvalue + coord yvalue.
	^self
!

copy: coord
	"Copies values of coordinates."

	| |
	xvalue := coord xvalue.
	yvalue := coord yvalue.
	^self
!

of: arr
	"Returs value of 2d array in stored coordinates."

	| |
	^(arr at: yvalue) at: xvalue
!

of: arr put: value
	"Sets value of 2d array in stored coordinates."

	| |
	^(arr at: yvalue) at: xvalue put: value
!

x: xnew
	"Sets new x value."

	| |
	xvalue := xnew.
	^self
!

x: xnew y: ynew
	"Sets new x and y values."

	| |
	xvalue := xnew.
	yvalue := ynew.
	^self
!

y: ynew
	"Sets new y value."

	| |
	yvalue := ynew.
	^self
! !

Object subclass: #Player
	slots: {#body. #direction. #oldTail}
	package: 'Snakegame'!

!Player methodsFor: 'behavior'!

grow
	"Adds length to the body."

	|  |
	body add: (Coord new copy: oldTail)
!

look: dir
	"Sets direction."

	|  |
	((Dictionary new) "switch-case"
		at: #up put: [ direction yvalue = 0 ifTrue: [ direction := Coord new x: 0 y: -1 ] ] ;
		at: #down put: [ direction yvalue = 0 ifTrue: [ direction := Coord new x: 0 y: 1 ] ] ;
		at: #left put: [ direction xvalue = 0 ifTrue: [ direction := Coord new x: -1 y: 0 ] ] ;
		at: #right put: [ direction xvalue = 0 ifTrue: [ direction := Coord new x: 1 y: 0 ] ] ;
		at: dir)
			value
!

move
	"Moves player."

	|  |
	oldTail copy: body last.
	1 to: (body size - 1) do: [ :i | (body at: ((body size) - i + 1)) copy: (body at: ((body size) - i)) ].
	(body at: 1) add: direction
! !

!Player methodsFor: 'getters'!

body
	^body
!

direction
	^direction
!

head
	^body first
! !

!Player methodsFor: 'initialization'!

init: arr
	"Initializes the player."

	|  |
	body := arr.
	oldTail := Coord new x: 0 y: 0.
	direction := Coord new x: 0 y: 0.
	^self
! !

!Player class methodsFor: 'not yet classified'!

new: arr
	"comment stating purpose of message"

	|  |
	^self new init: arr.
! !

Object subclass: #Representation
	slots: {#map. #w. #h. #player. #apple. #status. #timer}
	package: 'Snakegame'!

!Representation methodsFor: 'behavior'!

destroyTimer
	"Destroys interval timer."

	|  |
	timer isNil ifFalse: [ timer clearInterval ]
!

every: millisecs do: aBlock overwise: nextBlock
	"Runs code every so often."

	|  |
	timer := [
		(aBlock value: self) ifFalse: [
			timer clearInterval.
			nextBlock value: self
		]
	] valueWithInterval: millisecs.
	^self
!

process: keycode
	"Logic of the game."

	|  |
	#KeyW = keycode ifTrue: [ player look: #up ].
	#KeyS = keycode ifTrue: [ player look: #down ].
	#KeyA = keycode ifTrue: [ player look: #left ].
	#KeyD = keycode ifTrue: [ player look: #right ].
	player move.
	status := (
		((player head of: map) = (self idOf: #player)) |
		((player head of: map) = (self idOf: #wall))
	) not.
	(player head of: map) = (self idOf: #apple) ifTrue: [
		apple teleportWhere: map is: (self idOf: #void).
		player grow
	]
!

update
	"Updates representation buffer (map)."

	|  |
	1 to: h do: [ :y |
		1 to: w do: [ :x |
			(map at: y) at: x put: (
				(x = 1) | (x = w) | (y = 1) | (y = h)
					ifTrue: (self idOf: #wall)
					ifFalse: (self idOf: #void)
			)
		]
	].
	apple coord of: map put: (self idOf: #apple).
	player body do: [ :coord | coord of: map put: (self idOf: #player) ]
! !

!Representation methodsFor: 'getters'!

idOf: str
	#void = str ifTrue: [^1].
	#player = str ifTrue: [^2].
	#apple = str ifTrue: [^3].
	#wall = str ifTrue: [^4].
	^0
!

status
	^status
! !

!Representation methodsFor: 'initialization'!

add: obj
	"Adds certain object into representation."

	|  |
	((Dictionary new) "switch-case"
		at: Player put: [player := obj] ;
		at: Apple put: [apple := obj] ;
		at: obj class)
			value
!

initWithWidth: width andHeight: height
	"Initializes the representation."

	| |
	status := false.
	w := width.
	h := height.
	map := Array new. 1 to: h do: [ :y | map add: (Array new: w) ]. "Suddenly no map-function in Smalltalk ;-("
	^self
! !

!Representation methodsFor: 'visualization'!

printScoreOn: aBrush
	"Prints player body length."

	|  |
	aBrush empty ; with: (player body size - 2)
!

representOn: container
	"Visualises representation buffer (map) as div elements created in given contaner.
	 ( idk how to implement own  selector-classes  in  Amber,  so  i  can't  create  divs
	 just  once  and  only  change  classes  to  manipulate  with  their  backgrounds. )"

	|  |
	container empty with: [ :e |
		1 to: h do: [ :y |
			1 to: w do: [ :x |
				(e div)
					style: '
						background:',({
							'lightgrey' "VOID".
							'green' "PLAYER".
							'red' "APPLE".
							'darkgrey' "WALL" } at: ((map at: y) at: x)),';
						width: 10px;
						height: 10px;
						position: absolute;
						top: ',(y - 1 * 10) asString,'px;
						left: ',(x - 1 * 10) asString,'px;'.
			]
		]
	].
	^self
! !

Representation class slots: {#lastInstance}!

!Representation class methodsFor: 'initializing'!

createWithWidth: width andHeight: height
	"Replacement of new-method."

	| |
	lastInstance isNil ifFalse: [ lastInstance destroyTimer	].
	^lastInstance := self new initWithWidth: width andHeight: height.
! !

Object subclass: #Snakegame
	slots: {#keycode. #gameInstance}
	package: 'Snakegame'!
!Snakegame commentStamp!
Изменить название класса на Snakegamegame!

!Snakegame methodsFor: 'rendering'!

renderBodyInto: aBrush
	"Renders body."

	|  |
	aBrush
		style: '
			color: #eee;
			background: #333;' ;
		onKeyDown: [ :e | keycode := e code ]
!

renderGameInto: aBrush
	"Renders the game."

	|  |
	^(Representation createWithWidth: 20 andHeight: 15)
			add: ((Player new: { Coord new x: 17 y: 8. Coord new x: 18 y: 8. }) look: #left) ;
			add: (Apple new: (Coord new x: 8 y: 8)) ;
			update ;
			representOn: '#container' asBrush
!

renderInterfaceInto: aBrush
	"Renders the inteface."

	|  |
	aBrush
		style: '
			width: 100%;
			font-size: 12px;
			text-align: justify;' ;
		with: [ :e |
			e
				span: 'The Snakegame Game ['.
			e
				a
					href: '' ;
					with: 'source code' ;
					style: 'color: hotpink;'.
			e
				span: '] Powered by '.
			e
				a
					href: 'https://lolg.it/amber/amber' ;
					with: 'Amber (Smalltalk)' ;
					style: 'color: orange;'.
			(e
				br ;
				span: 'Controls - WSAD. Press ' ;
				span: 'start')
					style: '
						color: yellow;
						cursor: pointer;' ;
					id: 'start'.
			(e
				span: ' to start the game. Score: ' ;
				span: '0')
					id: 'score'.
		]
! !

!Snakegame methodsFor: 'starting'!

run
	"Program entry."

	|  |
	self
		renderBodyInto: 'body' asBrush ;
		renderInterfaceInto: '#interface' asBrush ;
		renderGameInto: ('#container' asBrush style: 'position: relative; margin-top: 10px;').
	'#start' asBrush onClick: [
		(self renderGameInto: '#container' asBrush)
			every: 200 "milliseconds" do: [ :r |
				r
					process: keycode ;
					update ;
					representOn: '#container' asBrush ;
					printScoreOn: '#score' asBrush ;
					status
			] overwise: [ :r |
				console log: 'Game over'.
			]
	].
! !

!Snakegame class methodsFor: 'starting'!

start
	self new run
! !

