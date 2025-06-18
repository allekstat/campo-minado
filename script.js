document.addEventListener('DOMContentLoaded', function ()
{
	const canvas = document.getElementsByTagName('canvas')[0];
	const ctx = canvas.getContext('2d');
	const {width, height} = canvas;
	function divisor_grid({divisao = 10})
	{
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 30 / divisao;
		ctx.beginPath();
		for (let i = 1; i < divisao; i++)
		{
			ctx.moveTo(width / divisao * i, 0);
			ctx.lineTo(width / divisao * i, height);
			ctx.moveTo(0, height / divisao * i);
			ctx.lineTo(width, height / divisao * i);
		}
		ctx.stroke();
	}
	function marcar_x({x, y, divisao = 10})
	{
		ctx.strokeStyle = '#f00';
		ctx.lineWidth = 10;
		ctx.beginPath();
		ctx.moveTo(width / divisao * (x + 0.1), height / divisao * (y + 0.1));
		ctx.lineTo(width / divisao * (x + 0.9), height / divisao * (y + 0.9));
		ctx.moveTo(width / divisao * (x + 0.9), height / divisao * (y + 0.1));
		ctx.lineTo(width / divisao * (x + 0.1), height / divisao * (y + 0.9));
		ctx.stroke();
	}
	function setup()
	{
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 10;
		ctx.beginPath();
		ctx.moveTo(width / 2, 0);
		ctx.lineTo(width / 2, height);
		ctx.stroke();
	}
	divisor_grid({divisao: 10});
	marcar_x({x:0,y:0});
	
});
function lock(count = 0, i = 0)
{
	while (count - i++);
}
function lock(milisegundos = 0)
{
	let i = 0;
	while (milisegundos * 1000000 - i++);
}
function async (milisegundos)
{
	return new Promise(resolve => setTimeout(resolve, milisegundos));
}