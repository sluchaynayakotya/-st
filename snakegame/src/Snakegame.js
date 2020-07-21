define(["amber/boot", "require", "amber/core/Kernel-Objects"], function($boot,requirejs){"use strict";
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
var $pkg = $core.addPackage("Snakegame");
$pkg.imports = ["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"];
//>>excludeStart("imports", pragmas.excludeImports);
$pkg.isReady = new Promise(function (resolve, reject) { requirejs(["amber/web/Web", "amber/web/Web-JQuery", "silk/Silk"], function () {resolve();}, reject); });
//>>excludeEnd("imports");
$pkg.transport = {"type":"amd","amdNamespace":"amber-snakegame"};

$core.addClass("Apple", $globals.Object, "Snakegame");
$core.setSlots($globals.Apple, ["coord"]);
$core.addMethod(
$core.method({
selector: "coord",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "coord\x0a\x09^coord",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.coord;

}; }),
$globals.Apple);

$core.addMethod(
$core.method({
selector: "init:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newcoord"],
source: "init: newcoord\x0a\x09\x22Initializes the apple.\x22\x0a\x0a\x09|  |\x0a\x09coord := newcoord.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (newcoord){
var self=this,$self=this;
$self.coord=newcoord;
return self;

}; }),
$globals.Apple);

$core.addMethod(
$core.method({
selector: "teleportWhere:is:",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["map", "value"],
source: "teleportWhere: map is: value\x0a\x09\x22Chooses free space on map and teleports apple there.\x22\x0a\x0a\x09| coords |\x0a\x09coords := Array new.\x0a\x091 to: (map size) do: [ :y |\x0a\x09\x091 to: ((map at: y) size) do: [ :x |\x0a\x09\x09\x09((map at: y) at: x) = value ifTrue: [\x0a\x09\x09\x09\x09coords add: (Coord new x: x y: y)\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09].\x0a\x09coords size > 0 ifTrue: [ coord := coords at: coords size atRandom ]",
referencedClasses: ["Array", "Coord"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "to:do:", "size", "at:", "ifTrue:", "=", "add:", "x:y:", ">", "atRandom"]
}, function ($methodClass){ return function (map,value){
var self=this,$self=this;
var coords;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
coords=[$recv($globals.Array)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[(1)._to_do_([$recv(map)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0],(function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._to_do_([$recv([$recv(map)._at_(y)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0])._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0],(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if($core.assert($recv([$recv([$recv(map)._at_(y)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["at:"]=3
//>>excludeEnd("ctx");
][0])._at_(x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]).__eq(value))){
return $recv(coords)._add_($recv($recv($globals.Coord)._new())._x_y_(x,y));
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["to:do:"]=1
//>>excludeEnd("ctx");
][0];
if($core.assert($recv([$recv(coords)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=3
//>>excludeEnd("ctx");
][0]).__gt((0)))){
$self.coord=$recv(coords)._at_($recv($recv(coords)._size())._atRandom());
$self.coord;
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"teleportWhere:is:",{map:map,value:value,coords:coords})});
//>>excludeEnd("ctx");
}; }),
$globals.Apple);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["newcoord"],
source: "new: newcoord\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09|  |\x0a\x09^self new init: newcoord.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["init:", "new"]
}, function ($methodClass){ return function (newcoord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._init_(newcoord);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{newcoord:newcoord})});
//>>excludeEnd("ctx");
}; }),
$globals.Apple.a$cls);


$core.addClass("Coord", $globals.Object, "Snakegame");
$core.setSlots($globals.Coord, ["xvalue", "yvalue"]);
$core.addMethod(
$core.method({
selector: "add:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["coord"],
source: "add: coord\x0a\x09\x22Adds coordinates together.\x22\x0a\x0a\x09| |\x0a\x09xvalue := xvalue + coord xvalue.\x0a\x09yvalue := yvalue + coord yvalue.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["+", "xvalue", "yvalue"]
}, function ($methodClass){ return function (coord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.xvalue=[$recv($self.xvalue).__plus($recv(coord)._xvalue())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["+"]=1
//>>excludeEnd("ctx");
][0];
$self.yvalue=$recv($self.yvalue).__plus($recv(coord)._yvalue());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{coord:coord})});
//>>excludeEnd("ctx");
}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "copy:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["coord"],
source: "copy: coord\x0a\x09\x22Copies values of coordinates.\x22\x0a\x0a\x09| |\x0a\x09xvalue := coord xvalue.\x0a\x09yvalue := coord yvalue.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["xvalue", "yvalue"]
}, function ($methodClass){ return function (coord){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.xvalue=$recv(coord)._xvalue();
$self.yvalue=$recv(coord)._yvalue();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copy:",{coord:coord})});
//>>excludeEnd("ctx");
}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "of:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["arr"],
source: "of: arr\x0a\x09\x22Returs value of 2d array in stored coordinates.\x22\x0a\x0a\x09| |\x0a\x09^(arr at: yvalue) at: xvalue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:"]
}, function ($methodClass){ return function (arr){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return [$recv($recv(arr)._at_($self.yvalue))._at_($self.xvalue)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"of:",{arr:arr})});
//>>excludeEnd("ctx");
}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "of:put:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["arr", "value"],
source: "of: arr put: value\x0a\x09\x22Sets value of 2d array in stored coordinates.\x22\x0a\x0a\x09| |\x0a\x09^(arr at: yvalue) at: xvalue put: value",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["at:put:", "at:"]
}, function ($methodClass){ return function (arr,value){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(arr)._at_($self.yvalue))._at_put_($self.xvalue,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"of:put:",{arr:arr,value:value})});
//>>excludeEnd("ctx");
}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "x:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["xnew"],
source: "x: xnew\x0a\x09\x22Sets new x value.\x22\x0a\x0a\x09| |\x0a\x09xvalue := xnew.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (xnew){
var self=this,$self=this;
$self.xvalue=xnew;
return self;

}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "x:y:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["xnew", "ynew"],
source: "x: xnew y: ynew\x0a\x09\x22Sets new x and y values.\x22\x0a\x0a\x09| |\x0a\x09xvalue := xnew.\x0a\x09yvalue := ynew.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (xnew,ynew){
var self=this,$self=this;
$self.xvalue=xnew;
$self.yvalue=ynew;
return self;

}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "xvalue",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xvalue\x0a\x09^xvalue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.xvalue;

}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "y:",
protocol: "operations",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ynew"],
source: "y: ynew\x0a\x09\x22Sets new y value.\x22\x0a\x0a\x09| |\x0a\x09yvalue := ynew.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (ynew){
var self=this,$self=this;
$self.yvalue=ynew;
return self;

}; }),
$globals.Coord);

$core.addMethod(
$core.method({
selector: "yvalue",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yvalue\x0a\x09^yvalue",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.yvalue;

}; }),
$globals.Coord);



$core.addClass("Player", $globals.Object, "Snakegame");
$core.setSlots($globals.Player, ["body", "direction", "oldTail"]);
$core.addMethod(
$core.method({
selector: "body",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "body\x0a\x09^body",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.body;

}; }),
$globals.Player);

$core.addMethod(
$core.method({
selector: "direction",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "direction\x0a\x09^direction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.direction;

}; }),
$globals.Player);

$core.addMethod(
$core.method({
selector: "grow",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "grow\x0a\x09\x22Adds length to the body.\x22\x0a\x0a\x09|  |\x0a\x09body add: (Coord new copy: oldTail)",
referencedClasses: ["Coord"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "copy:", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self.body)._add_($recv($recv($globals.Coord)._new())._copy_($self.oldTail));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"grow",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Player);

$core.addMethod(
$core.method({
selector: "head",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "head\x0a\x09^body first",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["first"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self.body)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"head",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Player);

$core.addMethod(
$core.method({
selector: "init:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["arr"],
source: "init: arr\x0a\x09\x22Initializes the player.\x22\x0a\x0a\x09|  |\x0a\x09body := arr.\x0a\x09oldTail := Coord new x: 0 y: 0.\x0a\x09direction := Coord new x: 0 y: 0.\x0a\x09^self",
referencedClasses: ["Coord"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["x:y:", "new"]
}, function ($methodClass){ return function (arr){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.body=arr;
$self.oldTail=[$recv([$recv($globals.Coord)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._x_y_((0),(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x:y:"]=1
//>>excludeEnd("ctx");
][0];
$self.direction=$recv($recv($globals.Coord)._new())._x_y_((0),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"init:",{arr:arr})});
//>>excludeEnd("ctx");
}; }),
$globals.Player);

$core.addMethod(
$core.method({
selector: "look:",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dir"],
source: "look: dir\x0a\x09\x22Sets direction.\x22\x0a\x0a\x09|  |\x0a\x09((Dictionary new) \x22switch-case\x22\x0a\x09\x09at: #up put: [ direction yvalue = 0 ifTrue: [ direction := Coord new x: 0 y: -1 ] ] ;\x0a\x09\x09at: #down put: [ direction yvalue = 0 ifTrue: [ direction := Coord new x: 0 y: 1 ] ] ;\x0a\x09\x09at: #left put: [ direction xvalue = 0 ifTrue: [ direction := Coord new x: -1 y: 0 ] ] ;\x0a\x09\x09at: #right put: [ direction xvalue = 0 ifTrue: [ direction := Coord new x: 1 y: 0 ] ] ;\x0a\x09\x09at: dir)\x0a\x09\x09\x09value",
referencedClasses: ["Dictionary", "Coord"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "at:put:", "new", "ifTrue:", "=", "yvalue", "x:y:", "xvalue", "at:"]
}, function ($methodClass){ return function (dir){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=[$recv($globals.Dictionary)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._at_put_("up",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv($self.direction)._yvalue()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["yvalue"]=1
//>>excludeEnd("ctx");
][0]).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
$self.direction=[$recv([$recv($globals.Coord)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._x_y_((0),(-1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["x:y:"]=1
//>>excludeEnd("ctx");
][0];
return $self.direction;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._at_put_("down",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv($recv($self.direction)._yvalue()).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])){
$self.direction=[$recv([$recv($globals.Coord)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=3
//>>excludeEnd("ctx");
][0])._x_y_((0),(1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["x:y:"]=2
//>>excludeEnd("ctx");
][0];
return $self.direction;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._at_put_("left",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert([$recv([$recv($self.direction)._xvalue()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["xvalue"]=1
//>>excludeEnd("ctx");
][0]).__eq((0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])){
$self.direction=[$recv([$recv($globals.Coord)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["new"]=4
//>>excludeEnd("ctx");
][0])._x_y_((-1),(0))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["x:y:"]=3
//>>excludeEnd("ctx");
][0];
return $self.direction;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=3
//>>excludeEnd("ctx");
][0];
$recv($1)._at_put_("right",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if($core.assert($recv($recv($self.direction)._xvalue()).__eq((0)))){
$self.direction=$recv($recv($globals.Coord)._new())._x_y_((1),(0));
return $self.direction;
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
$recv($recv($1)._at_(dir))._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"look:",{dir:dir})});
//>>excludeEnd("ctx");
}; }),
$globals.Player);

$core.addMethod(
$core.method({
selector: "move",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "move\x0a\x09\x22Moves player.\x22\x0a\x0a\x09|  |\x0a\x09oldTail copy: body last.\x0a\x091 to: (body size - 1) do: [ :i | (body at: ((body size) - i + 1)) copy: (body at: ((body size) - i)) ].\x0a\x09(body at: 1) add: direction",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["copy:", "last", "to:do:", "-", "size", "at:", "+", "add:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
[$recv($self.oldTail)._copy_($recv($self.body)._last())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["copy:"]=1
//>>excludeEnd("ctx");
][0];
(1)._to_do_([$recv([$recv($self.body)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["size"]=1
//>>excludeEnd("ctx");
][0]).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0],(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv([$recv($self.body)._at_($recv([$recv([$recv($self.body)._size()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["size"]=2
//>>excludeEnd("ctx");
][0]).__minus(i)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["-"]=2
//>>excludeEnd("ctx");
][0]).__plus((1)))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0])._copy_([$recv($self.body)._at_($recv($recv($self.body)._size()).__minus(i))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv($self.body)._at_((1)))._add_($self.direction);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"move",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Player);


$core.addMethod(
$core.method({
selector: "new:",
protocol: "not yet classified",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["arr"],
source: "new: arr\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09|  |\x0a\x09^self new init: arr.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["init:", "new"]
}, function ($methodClass){ return function (arr){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($self._new())._init_(arr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{arr:arr})});
//>>excludeEnd("ctx");
}; }),
$globals.Player.a$cls);


$core.addClass("Representation", $globals.Object, "Snakegame");
$core.setSlots($globals.Representation, ["map", "w", "h", "player", "apple", "status", "timer"]);
$core.addMethod(
$core.method({
selector: "add:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["obj"],
source: "add: obj\x0a\x09\x22Adds certain object into representation.\x22\x0a\x0a\x09|  |\x0a\x09((Dictionary new) \x22switch-case\x22\x0a\x09\x09at: Player put: [player := obj] ;\x0a\x09\x09at: Apple put: [apple := obj] ;\x0a\x09\x09at: obj class)\x0a\x09\x09\x09value",
referencedClasses: ["Dictionary", "Player", "Apple"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["value", "at:put:", "new", "at:", "class"]
}, function ($methodClass){ return function (obj){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Dictionary)._new();
[$recv($1)._at_put_($globals.Player,(function(){
$self.player=obj;
return $self.player;

}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["at:put:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._at_put_($globals.Apple,(function(){
$self.apple=obj;
return $self.apple;

}));
$recv($recv($1)._at_($recv(obj)._class()))._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{obj:obj})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "destroyTimer",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "destroyTimer\x0a\x09\x22Destroys interval timer.\x22\x0a\x0a\x09|  |\x0a\x09timer isNil ifFalse: [ timer clearInterval ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isNil", "clearInterval"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($self.timer)._isNil())){
$recv($self.timer)._clearInterval();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"destroyTimer",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "every:do:overwise:",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["millisecs", "aBlock", "nextBlock"],
source: "every: millisecs do: aBlock overwise: nextBlock\x0a\x09\x22Runs code every so often.\x22\x0a\x0a\x09|  |\x0a\x09timer := [\x0a\x09\x09(aBlock value: self) ifFalse: [\x0a\x09\x09\x09timer clearInterval.\x0a\x09\x09\x09nextBlock value: self\x0a\x09\x09]\x0a\x09] valueWithInterval: millisecs.\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["valueWithInterval:", "ifFalse:", "value:", "clearInterval"]
}, function ($methodClass){ return function (millisecs,aBlock,nextBlock){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.timer=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(!$core.assert([$recv(aBlock)._value_(self)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["value:"]=1
//>>excludeEnd("ctx");
][0])){
$recv($self.timer)._clearInterval();
return $recv(nextBlock)._value_(self);
}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithInterval_(millisecs);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"every:do:overwise:",{millisecs:millisecs,aBlock:aBlock,nextBlock:nextBlock})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "idOf:",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["str"],
source: "idOf: str\x0a\x09#void = str ifTrue: [^1].\x0a\x09#player = str ifTrue: [^2].\x0a\x09#apple = str ifTrue: [^3].\x0a\x09#wall = str ifTrue: [^4].\x0a\x09^0",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "="]
}, function ($methodClass){ return function (str){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(["void".__eq(str)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
return (1);
}
if($core.assert(["player".__eq(str)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])){
return (2);
}
if($core.assert(["apple".__eq(str)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])){
return (3);
}
if($core.assert("wall".__eq(str))){
return (4);
}
return (0);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"idOf:",{str:str})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "initWithWidth:andHeight:",
protocol: "initialization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["width", "height"],
source: "initWithWidth: width andHeight: height\x0a\x09\x22Initializes the representation.\x22\x0a\x0a\x09| |\x0a\x09status := false.\x0a\x09w := width.\x0a\x09h := height.\x0a\x09map := Array new. 1 to: h do: [ :y | map add: (Array new: w) ]. \x22Suddenly no map-function in Smalltalk ;-(\x22\x0a\x09^self",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["new", "to:do:", "add:", "new:"]
}, function ($methodClass){ return function (width,height){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self.status=false;
$self.w=width;
$self.h=height;
$self.map=$recv($globals.Array)._new();
(1)._to_do_($self.h,(function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self.map)._add_($recv($globals.Array)._new_($self.w));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initWithWidth:andHeight:",{width:width,height:height})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "printScoreOn:",
protocol: "visualization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrush"],
source: "printScoreOn: aBrush\x0a\x09\x22Prints player body length.\x22\x0a\x0a\x09|  |\x0a\x09aBrush empty ; with: (player body size - 2)",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["empty", "with:", "-", "size", "body"]
}, function ($methodClass){ return function (aBrush){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBrush)._empty();
$recv(aBrush)._with_($recv($recv($recv($self.player)._body())._size()).__minus((2)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printScoreOn:",{aBrush:aBrush})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "process:",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["keycode"],
source: "process: keycode\x0a\x09\x22Logic of the game.\x22\x0a\x0a\x09|  |\x0a\x09#KeyW = keycode ifTrue: [ player look: #up ].\x0a\x09#KeyS = keycode ifTrue: [ player look: #down ].\x0a\x09#KeyA = keycode ifTrue: [ player look: #left ].\x0a\x09#KeyD = keycode ifTrue: [ player look: #right ].\x0a\x09player move.\x0a\x09status := (\x0a\x09\x09((player head of: map) = (self idOf: #player)) |\x0a\x09\x09((player head of: map) = (self idOf: #wall))\x0a\x09) not.\x0a\x09(player head of: map) = (self idOf: #apple) ifTrue: [\x0a\x09\x09apple teleportWhere: map is: (self idOf: #void).\x0a\x09\x09player grow\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifTrue:", "=", "look:", "move", "not", "|", "of:", "head", "idOf:", "teleportWhere:is:", "grow"]
}, function ($methodClass){ return function (keycode){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(["KeyW".__eq(keycode)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=1
//>>excludeEnd("ctx");
][0])){
[$recv($self.player)._look_("up")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["look:"]=1
//>>excludeEnd("ctx");
][0];
}
if($core.assert(["KeyS".__eq(keycode)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])){
[$recv($self.player)._look_("down")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["look:"]=2
//>>excludeEnd("ctx");
][0];
}
if($core.assert(["KeyA".__eq(keycode)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])){
[$recv($self.player)._look_("left")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["look:"]=3
//>>excludeEnd("ctx");
][0];
}
if($core.assert(["KeyD".__eq(keycode)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=4
//>>excludeEnd("ctx");
][0])){
$recv($self.player)._look_("right");
}
$recv($self.player)._move();
$self.status=$recv($recv([$recv([$recv([$recv($self.player)._head()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["head"]=1
//>>excludeEnd("ctx");
][0])._of_($self.map)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["of:"]=1
//>>excludeEnd("ctx");
][0]).__eq([$self._idOf_("player")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["idOf:"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=5
//>>excludeEnd("ctx");
][0]).__or([$recv([$recv([$recv($self.player)._head()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["head"]=2
//>>excludeEnd("ctx");
][0])._of_($self.map)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["of:"]=2
//>>excludeEnd("ctx");
][0]).__eq([$self._idOf_("wall")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["idOf:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["="]=6
//>>excludeEnd("ctx");
][0]))._not();
if($core.assert($recv($recv($recv($self.player)._head())._of_($self.map)).__eq([$self._idOf_("apple")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["idOf:"]=3
//>>excludeEnd("ctx");
][0]))){
$recv($self.apple)._teleportWhere_is_($self.map,$self._idOf_("void"));
$recv($self.player)._grow();
}
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"process:",{keycode:keycode})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "representOn:",
protocol: "visualization",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["container"],
source: "representOn: container\x0a\x09\x22Visualises representation buffer (map) as div elements created in given contaner.\x0a\x09 ( idk how to implement own  selector-classes  in  Amber,  so  i  can't  create  divs\x0a\x09 just  once  and  only  change  classes  to  manipulate  with  their  backgrounds. )\x22\x0a\x0a\x09|  |\x0a\x09container empty with: [ :e |\x0a\x09\x091 to: h do: [ :y |\x0a\x09\x09\x091 to: w do: [ :x |\x0a\x09\x09\x09\x09(e div)\x0a\x09\x09\x09\x09\x09style: '\x0a\x09\x09\x09\x09\x09\x09background:',({\x0a\x09\x09\x09\x09\x09\x09\x09'lightgrey' \x22VOID\x22.\x0a\x09\x09\x09\x09\x09\x09\x09'green' \x22PLAYER\x22.\x0a\x09\x09\x09\x09\x09\x09\x09'red' \x22APPLE\x22.\x0a\x09\x09\x09\x09\x09\x09\x09'darkgrey' \x22WALL\x22 } at: ((map at: y) at: x)),';\x0a\x09\x09\x09\x09\x09\x09width: 10px;\x0a\x09\x09\x09\x09\x09\x09height: 10px;\x0a\x09\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09\x09top: ',(y - 1 * 10) asString,'px;\x0a\x09\x09\x09\x09\x09\x09left: ',(x - 1 * 10) asString,'px;'.\x0a\x09\x09\x09]\x0a\x09\x09]\x0a\x09].\x0a\x09^self",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["with:", "empty", "to:do:", "style:", "div", ",", "at:", "asString", "*", "-"]
}, function ($methodClass){ return function (container){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(container)._empty())._with_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return [(1)._to_do_($self.h,(function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return (1)._to_do_($self.w,(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(e)._div())._style_([$recv([$recv([$recv([$recv([$recv("\x0a\x09\x09\x09\x09\x09\x09background:".__comma([$recv(["lightgrey","green","red","darkgrey"])._at_([$recv($recv($self.map)._at_(y))._at_(x)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["at:"]=2
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["at:"]=1
//>>excludeEnd("ctx");
][0])).__comma(";\x0a\x09\x09\x09\x09\x09\x09width: 10px;\x0a\x09\x09\x09\x09\x09\x09height: 10px;\x0a\x09\x09\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09\x09\x09top: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx[","]=5
//>>excludeEnd("ctx");
][0]).__comma([$recv([$recv([$recv(y).__minus((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["-"]=1
//>>excludeEnd("ctx");
][0]).__star((10))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["*"]=1
//>>excludeEnd("ctx");
][0])._asString()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx["asString"]=1
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx[","]=4
//>>excludeEnd("ctx");
][0]).__comma("px;\x0a\x09\x09\x09\x09\x09\x09left: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx[","]=3
//>>excludeEnd("ctx");
][0]).__comma($recv($recv($recv(x).__minus((1))).__star((10)))._asString())
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx[","]=2
//>>excludeEnd("ctx");
][0]).__comma("px;")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx4.sendIdx[","]=1
//>>excludeEnd("ctx");
][0]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({x:x},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({y:y},$ctx2,2)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["to:do:"]=1
//>>excludeEnd("ctx");
][0];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"representOn:",{container:container})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "status",
protocol: "getters",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "status\x0a\x09^status",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: []
}, function ($methodClass){ return function (){
var self=this,$self=this;
return $self.status;

}; }),
$globals.Representation);

$core.addMethod(
$core.method({
selector: "update",
protocol: "behavior",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22Updates representation buffer (map).\x22\x0a\x0a\x09|  |\x0a\x091 to: h do: [ :y |\x0a\x09\x091 to: w do: [ :x |\x0a\x09\x09\x09(map at: y) at: x put: (\x0a\x09\x09\x09\x09(x = 1) | (x = w) | (y = 1) | (y = h)\x0a\x09\x09\x09\x09\x09ifTrue: (self idOf: #wall)\x0a\x09\x09\x09\x09\x09ifFalse: (self idOf: #void)\x0a\x09\x09\x09)\x0a\x09\x09]\x0a\x09].\x0a\x09apple coord of: map put: (self idOf: #apple).\x0a\x09player body do: [ :coord | coord of: map put: (self idOf: #player) ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["to:do:", "at:put:", "at:", "ifTrue:ifFalse:", "|", "=", "idOf:", "of:put:", "coord", "do:", "body"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
[(1)._to_do_($self.h,(function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._to_do_($self.w,(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($self.map)._at_(y);
$2=$recv([$recv([$recv($recv([$recv(x).__eq((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["="]=1
//>>excludeEnd("ctx");
][0]).__or([$recv(x).__eq($self.w)
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["="]=2
//>>excludeEnd("ctx");
][0])).__or([$recv(y).__eq((1))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["="]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["|"]=2
//>>excludeEnd("ctx");
][0]).__or($recv(y).__eq($self.h))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["|"]=1
//>>excludeEnd("ctx");
][0])._ifTrue_ifFalse_([$self._idOf_("wall")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["idOf:"]=1
//>>excludeEnd("ctx");
][0],[$self._idOf_("void")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["idOf:"]=2
//>>excludeEnd("ctx");
][0]);
return $recv($1)._at_put_(x,$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({x:x},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["to:do:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($recv($self.apple)._coord())._of_put_($self.map,[$self._idOf_("apple")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["idOf:"]=3
//>>excludeEnd("ctx");
][0])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["of:put:"]=1
//>>excludeEnd("ctx");
][0];
$recv($recv($self.player)._body())._do_((function(coord){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(coord)._of_put_($self.map,$self._idOf_("player"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({coord:coord},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation);


$core.setSlots($globals.Representation.a$cls, ["lastInstance"]);
$core.addMethod(
$core.method({
selector: "createWithWidth:andHeight:",
protocol: "initializing",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["width", "height"],
source: "createWithWidth: width andHeight: height\x0a\x09\x22Replacement of new-method.\x22\x0a\x0a\x09| |\x0a\x09lastInstance isNil ifFalse: [ lastInstance destroyTimer\x09].\x0a\x09^lastInstance := self new initWithWidth: width andHeight: height.",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["ifFalse:", "isNil", "destroyTimer", "initWithWidth:andHeight:", "new"]
}, function ($methodClass){ return function (width,height){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if(!$core.assert($recv($self.lastInstance)._isNil())){
$recv($self.lastInstance)._destroyTimer();
}
$self.lastInstance=$recv($self._new())._initWithWidth_andHeight_(width,height);
return $self.lastInstance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createWithWidth:andHeight:",{width:width,height:height})});
//>>excludeEnd("ctx");
}; }),
$globals.Representation.a$cls);


$core.addClass("Snakegame", $globals.Object, "Snakegame");
$core.setSlots($globals.Snakegame, ["keycode", "gameInstance"]);
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Snakegame.comment="Изменить название класса на Snakegamegame";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "renderBodyInto:",
protocol: "rendering",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrush"],
source: "renderBodyInto: aBrush\x0a\x09\x22Renders body.\x22\x0a\x0a\x09|  |\x0a\x09aBrush\x0a\x09\x09style: '\x0a\x09\x09\x09color: #eee;\x0a\x09\x09\x09background: #333;' ;\x0a\x09\x09onKeyDown: [ :e | keycode := e code ]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["style:", "onKeyDown:", "code"]
}, function ($methodClass){ return function (aBrush){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBrush)._style_("\x0a\x09\x09\x09color: #eee;\x0a\x09\x09\x09background: #333;");
$recv(aBrush)._onKeyDown_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self.keycode=$recv(e)._code();
return $self.keycode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBodyInto:",{aBrush:aBrush})});
//>>excludeEnd("ctx");
}; }),
$globals.Snakegame);

$core.addMethod(
$core.method({
selector: "renderGameInto:",
protocol: "rendering",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrush"],
source: "renderGameInto: aBrush\x0a\x09\x22Renders the game.\x22\x0a\x0a\x09|  |\x0a\x09^(Representation createWithWidth: 20 andHeight: 15)\x0a\x09\x09\x09add: ((Player new: { Coord new x: 17 y: 8. Coord new x: 18 y: 8. }) look: #left) ;\x0a\x09\x09\x09add: (Apple new: (Coord new x: 8 y: 8)) ;\x0a\x09\x09\x09update ;\x0a\x09\x09\x09representOn: '#container' asBrush",
referencedClasses: ["Representation", "Player", "Coord", "Apple"],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["add:", "createWithWidth:andHeight:", "look:", "new:", "x:y:", "new", "update", "representOn:", "asBrush"]
}, function ($methodClass){ return function (aBrush){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.Representation)._createWithWidth_andHeight_((20),(15));
[$recv($1)._add_($recv([$recv($globals.Player)._new_([[$recv([$recv($globals.Coord)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=1
//>>excludeEnd("ctx");
][0])._x_y_((17),(8))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x:y:"]=1
//>>excludeEnd("ctx");
][0],[$recv([$recv($globals.Coord)._new()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new"]=2
//>>excludeEnd("ctx");
][0])._x_y_((18),(8))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["x:y:"]=2
//>>excludeEnd("ctx");
][0]])
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["new:"]=1
//>>excludeEnd("ctx");
][0])._look_("left"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["add:"]=1
//>>excludeEnd("ctx");
][0];
$recv($1)._add_($recv($globals.Apple)._new_($recv($recv($globals.Coord)._new())._x_y_((8),(8))));
$recv($1)._update();
return $recv($1)._representOn_("#container"._asBrush());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderGameInto:",{aBrush:aBrush})});
//>>excludeEnd("ctx");
}; }),
$globals.Snakegame);

$core.addMethod(
$core.method({
selector: "renderInterfaceInto:",
protocol: "rendering",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBrush"],
source: "renderInterfaceInto: aBrush\x0a\x09\x22Renders the inteface.\x22\x0a\x0a\x09|  |\x0a\x09aBrush\x0a\x09\x09style: '\x0a\x09\x09\x09width: 100%;\x0a\x09\x09\x09font-size: 12px;\x0a\x09\x09\x09text-align: justify;' ;\x0a\x09\x09with: [ :e |\x0a\x09\x09\x09e\x0a\x09\x09\x09\x09span: 'The Snakegame Game ['.\x0a\x09\x09\x09e\x0a\x09\x09\x09\x09a\x0a\x09\x09\x09\x09\x09href: '' ;\x0a\x09\x09\x09\x09\x09with: 'source code' ;\x0a\x09\x09\x09\x09\x09style: 'color: hotpink;'.\x0a\x09\x09\x09e\x0a\x09\x09\x09\x09span: '] Powered by '.\x0a\x09\x09\x09e\x0a\x09\x09\x09\x09a\x0a\x09\x09\x09\x09\x09href: 'https://lolg.it/amber/amber' ;\x0a\x09\x09\x09\x09\x09with: 'Amber (Smalltalk)' ;\x0a\x09\x09\x09\x09\x09style: 'color: orange;'.\x0a\x09\x09\x09(e\x0a\x09\x09\x09\x09br ;\x0a\x09\x09\x09\x09span: 'Controls - WSAD. Press ' ;\x0a\x09\x09\x09\x09span: 'start')\x0a\x09\x09\x09\x09\x09style: '\x0a\x09\x09\x09\x09\x09\x09color: yellow;\x0a\x09\x09\x09\x09\x09\x09cursor: pointer;' ;\x0a\x09\x09\x09\x09\x09id: 'start'.\x0a\x09\x09\x09(e\x0a\x09\x09\x09\x09span: ' to start the game. Score: ' ;\x0a\x09\x09\x09\x09span: '0')\x0a\x09\x09\x09\x09\x09id: 'score'.\x0a\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["style:", "with:", "span:", "href:", "a", "br", "id:"]
}, function ($methodClass){ return function (aBrush){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
[$recv(aBrush)._style_("\x0a\x09\x09\x09width: 100%;\x0a\x09\x09\x09font-size: 12px;\x0a\x09\x09\x09text-align: justify;")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["style:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(aBrush)._with_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
[$recv(e)._span_("The Snakegame Game [")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["span:"]=1
//>>excludeEnd("ctx");
][0];
$1=[$recv(e)._a()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["a"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._href_("")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["href:"]=1
//>>excludeEnd("ctx");
][0];
[$recv($1)._with_("source code")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["with:"]=2
//>>excludeEnd("ctx");
][0];
[$recv($1)._style_("color: hotpink;")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["style:"]=2
//>>excludeEnd("ctx");
][0];
[$recv(e)._span_("] Powered by ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["span:"]=2
//>>excludeEnd("ctx");
][0];
$2=$recv(e)._a();
$recv($2)._href_("https://lolg.it/amber/amber");
$recv($2)._with_("Amber (Smalltalk)");
[$recv($2)._style_("color: orange;")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["style:"]=3
//>>excludeEnd("ctx");
][0];
$recv(e)._br();
[$recv(e)._span_("Controls - WSAD. Press ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["span:"]=3
//>>excludeEnd("ctx");
][0];
$3=[$recv(e)._span_("start")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["span:"]=4
//>>excludeEnd("ctx");
][0];
$recv($3)._style_("\x0a\x09\x09\x09\x09\x09\x09color: yellow;\x0a\x09\x09\x09\x09\x09\x09cursor: pointer;");
[$recv($3)._id_("start")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["id:"]=1
//>>excludeEnd("ctx");
][0];
[$recv(e)._span_(" to start the game. Score: ")
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["span:"]=5
//>>excludeEnd("ctx");
][0];
return $recv($recv(e)._span_("0"))._id_("score");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["with:"]=1
//>>excludeEnd("ctx");
][0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderInterfaceInto:",{aBrush:aBrush})});
//>>excludeEnd("ctx");
}; }),
$globals.Snakegame);

$core.addMethod(
$core.method({
selector: "run",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09\x22Program entry.\x22\x0a\x0a\x09|  |\x0a\x09self\x0a\x09\x09renderBodyInto: 'body' asBrush ;\x0a\x09\x09renderInterfaceInto: '#interface' asBrush ;\x0a\x09\x09renderGameInto: ('#container' asBrush style: 'position: relative; margin-top: 10px;').\x0a\x09'#start' asBrush onClick: [\x0a\x09\x09(self renderGameInto: '#container' asBrush)\x0a\x09\x09\x09every: 200 \x22milliseconds\x22 do: [ :r |\x0a\x09\x09\x09\x09r\x0a\x09\x09\x09\x09\x09process: keycode ;\x0a\x09\x09\x09\x09\x09update ;\x0a\x09\x09\x09\x09\x09representOn: '#container' asBrush ;\x0a\x09\x09\x09\x09\x09printScoreOn: '#score' asBrush ;\x0a\x09\x09\x09\x09\x09status\x0a\x09\x09\x09] overwise: [ :r |\x0a\x09\x09\x09\x09console log: 'Game over'.\x0a\x09\x09\x09]\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["renderBodyInto:", "asBrush", "renderInterfaceInto:", "renderGameInto:", "style:", "onClick:", "every:do:overwise:", "process:", "update", "representOn:", "printScoreOn:", "status", "log:"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._renderBodyInto_(["body"._asBrush()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asBrush"]=1
//>>excludeEnd("ctx");
][0]);
$self._renderInterfaceInto_(["#interface"._asBrush()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asBrush"]=2
//>>excludeEnd("ctx");
][0]);
[$self._renderGameInto_($recv(["#container"._asBrush()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asBrush"]=3
//>>excludeEnd("ctx");
][0])._style_("position: relative; margin-top: 10px;"))
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["renderGameInto:"]=1
//>>excludeEnd("ctx");
][0];
$recv(["#start"._asBrush()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx1.sendIdx["asBrush"]=4
//>>excludeEnd("ctx");
][0])._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($self._renderGameInto_(["#container"._asBrush()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx2.sendIdx["asBrush"]=5
//>>excludeEnd("ctx");
][0]))._every_do_overwise_((200),(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(r)._process_($self.keycode);
$recv(r)._update();
$recv(r)._representOn_(["#container"._asBrush()
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
,$ctx3.sendIdx["asBrush"]=6
//>>excludeEnd("ctx");
][0]);
$recv(r)._printScoreOn_("#score"._asBrush());
return $recv(r)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({r:r},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(console)._log_("Game over");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({r:r},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Snakegame);


$core.addMethod(
$core.method({
selector: "start",
protocol: "starting",
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new run",
referencedClasses: [],
//>>excludeEnd("ide");
pragmas: [],
messageSends: ["run", "new"]
}, function ($methodClass){ return function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self._new())._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{})});
//>>excludeEnd("ctx");
}; }),
$globals.Snakegame.a$cls);

});
