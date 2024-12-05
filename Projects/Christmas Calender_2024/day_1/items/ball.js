function drawBall(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const left = x - size / 2;
   // ctx.strokeRect(top, left, size, size);
  
    const ring = {
      radius: size * 0.1,
      x,
      get y() {
        return top + this.radius;
      },
      thickness: size * 0.05,
      color: color.darkest(hue),
    };
  
    draw.circle(ctx, ring.x, ring.y, ring.radius, {
      strokeStyle: ring.color,
      lineWidth: ring.thickness,
      outline: "inside",
    });
  
    const ball = {
      radius: size * 0.45,
      x,
      get y() {
        return top + ring.radius + this.radius;
      },
    };
  
    const highlight = {
      x: ball.x - ball.radius * 0.3,
      y: ball.y - ball.radius * 0.3,
      radius: ball.radius * 0.4,  
      // Defining the radius for the highlight
    };
  
    const grd = ctx.createRadialGradient(
      highlight.x,
      highlight.y,
      0,       // Start radius (0 for the center)
      highlight.x,
      highlight.y,
      highlight.radius*2 // End radius
    );
  
    grd.addColorStop(0, color.light(hue));
    grd.addColorStop(0.3, color.normal(hue));
    grd.addColorStop(1, color.darkest(hue));
  
    draw.circle(ctx, ball.x, ball.y, ball.radius, {
      fillStyle: grd,
    });
  }
  