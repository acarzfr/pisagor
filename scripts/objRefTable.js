const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.video,
		C3.Plugins.iframe,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.video.Acts.SetSource,
		C3.Plugins.video.Acts.Play,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.video.Cnds.HasEnded,
		C3.Plugins.video.Cnds.IsPlaying,
		C3.Plugins.video.Acts.Pause,
		C3.Plugins.video.Acts.SetPlaybackTime,
		C3.Plugins.video.Exps.PlaybackTime,
		C3.Plugins.video.Cnds.IsPaused
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{BTN_Genel: 0},
	{Dokun: 0},
	{Fare: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Videolar: 0},
	{iframe: 0},
	{video: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	BTN_Genel: class extends self.ISpriteInstance {},
	Dokun: class extends self.IInstance {},
	Fare: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Videolar: class extends self.IWorldInstance {},
	iframe: class extends self.IIframeInstance {}
}