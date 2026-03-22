/**
 * orbital.js — Animated atomic orbital for 10x Vibecode Hackathon
 * 9 AI tool icons orbit 3 ellipses (React-logo style, 0° / 60° / -60°)
 */
(function () {
  'use strict';

  /* ── Tool definitions ── */
  var TOOLS = [
    {
      name: 'ChatGPT', bg: '#10a37f', glow: 'rgba(16,163,127,0.85)',
      svg: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M22.28 9.82a6 6 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.99 5.99 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.1 5.98 5.98 0 0 0 .51 4.9 6.05 6.05 0 0 0 6.52 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.15-.08 4.78-2.76a.8.8 0 0 0 .4-.7V11.2l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.43zM3.83 18.12a4.48 4.48 0 0 1-.54-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.34a.08.08 0 0 1-.03.06l-4.84 2.8a4.5 4.5 0 0 1-6.13-1.66zm-1.36-7.83A4.47 4.47 0 0 1 4.82 8.1v5.83a.77.77 0 0 0 .39.69l5.84 3.37-2.02 1.17a.08.08 0 0 1-.07.01L3.69 16.1a4.5 4.5 0 0 1-1.22-5.81zm16.62 3.85-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l5.26 3.04a4.5 4.5 0 0 1-.69 8.12v-5.52a.8.8 0 0 0-.82-.1zm2.01-3.02-.14-.08-4.78-2.76a.78.78 0 0 0-.79 0L9.55 12.6v-2.33a.07.07 0 0 1 .03-.06l5.26-3.04a4.5 4.5 0 0 1 6.67 4.65zM8.46 13.58l-2.02-1.17a.08.08 0 0 1-.04-.05V6.78a4.5 4.5 0 0 1 7.38-3.45l-.15.08-4.78 2.76a.8.8 0 0 0-.39.7v6.71zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z"/></svg>'
    },
    {
      name: 'Cursor', bg: '#7c3aed', glow: 'rgba(124,58,237,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>'
    },
    {
      name: 'Claude', bg: '#c96342', glow: 'rgba(201,99,66,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-.5 5h1l3 8h-1.5l-.7-2h-2.6l-.7 2H8.5l3-8zm.5 2-1 3h2l-1-3z" fill="white"/></svg>'
    },
    {
      name: 'Windsurf', bg: '#0284c7', glow: 'rgba(2,132,199,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><path d="M3 6s2-2 4-2 4 2 6 2 4-2 6-2"/><path d="M3 12s2-2 4-2 4 2 6 2 4-2 6-2"/><path d="M3 18s2-2 4-2 4 2 6 2 4-2 6-2"/></svg>'
    },
    {
      name: 'Copilot', bg: '#4f46e5', glow: 'rgba(79,70,229,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84a9.59 9.59 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>'
    },
    {
      name: 'v0.dev', bg: '#18181b', glow: 'rgba(139,92,246,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.5 19 12 5 20.5V3.5Z"/></svg>'
    },
    {
      name: 'Bolt.new', bg: '#d97706', glow: 'rgba(217,119,6,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/></svg>'
    },
    {
      name: 'Replit', bg: '#c0392b', glow: 'rgba(192,57,43,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h7v5H4zM4 9.5h7v5H4zM4 15h7v5H4zM11.5 4H19v16h-7.5z" opacity="0.9"/></svg>'
    },
    {
      name: 'Gemini', bg: '#1a56db', glow: 'rgba(26,86,219,0.85)',
      svg: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'
    }
  ];

  /* ── Orbit config: 3 rings at 0°, 60°, -60° (React-logo angles) ── */
  var ORBITS = [
    { deg: 0,   speed: 0.44 },
    { deg: 60,  speed: 0.36 },
    { deg: -60, speed: 0.53 }
  ];

  /* ── 3 icons per orbit, evenly phased (0, 2π/3, 4π/3) ── */
  var TWO3PI = (2 * Math.PI) / 3;
  var ASSIGN = [];
  for (var o = 0; o < 3; o++) {
    for (var p = 0; p < 3; p++) {
      ASSIGN.push({ orbit: o, phase: p * TWO3PI });
    }
  }

  /* ── DOM ── */
  var canvas    = document.getElementById('orbital-canvas');
  var iconWrap  = document.getElementById('orbit-icons-container');
  if (!canvas || !iconWrap) return;

  var ctx = canvas.getContext('2d');

  /* Create icon elements */
  var iconEls = TOOLS.map(function (tool) {
    var div = document.createElement('div');
    div.className = 'orbit-icon';
    div.title = tool.name;
    div.innerHTML =
      '<div class="oi-inner" style="background:' + tool.bg +
      ';box-shadow:0 0 16px ' + tool.glow + ',0 2px 10px rgba(0,0,0,0.55)">' +
      tool.svg +
      '<span class="oi-tip">' + tool.name + '</span>' +
      '</div>';
    iconWrap.appendChild(div);
    return div;
  });

  /* ── Dimensions ── */
  var W, H, cx, cy, RX, RY;

  function resize() {
    var wrap = canvas.parentElement;
    W = canvas.width  = Math.round(wrap.clientWidth);
    H = canvas.height = canvas.offsetHeight;
    cx = W / 2;
    cy = H / 2;
    var scale = Math.min(W / 800, H / 460, 1.15);
    RX = 272 * scale;
    RY = 94  * scale;
  }

  /* ── Math: point on rotated ellipse ── */
  function orbitPt(t, deg) {
    var r = deg * Math.PI / 180;
    var x =  RX * Math.cos(t);
    var y =  RY * Math.sin(t);
    return {
      x: cx + x * Math.cos(r) - y * Math.sin(r),
      y: cy + x * Math.sin(r) + y * Math.cos(r)
    };
  }

  /* ── Drawing ── */
  function drawRing(deg) {
    var r = deg * Math.PI / 180;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(r);

    /* Outer haze */
    ctx.beginPath();
    ctx.ellipse(0, 0, RX, RY, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(139,92,246,0.055)';
    ctx.lineWidth = 28;
    ctx.stroke();

    /* Mid glow */
    ctx.beginPath();
    ctx.ellipse(0, 0, RX, RY, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(139,92,246,0.18)';
    ctx.lineWidth = 7;
    ctx.stroke();

    /* Sharp core */
    ctx.beginPath();
    ctx.ellipse(0, 0, RX, RY, 0, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(196,165,255,0.55)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.restore();
  }

  function drawNucleus(t) {
    var pulse = 1 + 0.1 * Math.sin(t * 2.3);
    var r = 20 * pulse;

    /* Wide ambient halo */
    var halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 3.8);
    halo.addColorStop(0,   'rgba(196,165,255,0.50)');
    halo.addColorStop(0.45,'rgba(109,40,217,0.22)');
    halo.addColorStop(1,   'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, r * 3.8, 0, Math.PI * 2);
    ctx.fillStyle = halo;
    ctx.fill();

    /* Nucleus body */
    var body = ctx.createRadialGradient(cx - r * 0.28, cy - r * 0.28, r * 0.08, cx, cy, r);
    body.addColorStop(0,    '#ffffff');
    body.addColorStop(0.28, '#ede9fe');
    body.addColorStop(0.65, '#a78bfa');
    body.addColorStop(1,    '#4c1d95');
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = body;
    ctx.fill();

    /* Specular dot */
    var spec = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx - r * 0.3, cy - r * 0.3, r * 0.55);
    spec.addColorStop(0, 'rgba(255,255,255,0.7)');
    spec.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = spec;
    ctx.fill();
  }

  /* ── Animation loop ── */
  var startTs = null;
  var SZ = 34; /* icon diameter px */

  function frame(ts) {
    if (!startTs) startTs = ts;
    var t = (ts - startTs) / 1000;

    ctx.clearRect(0, 0, W, H);

    ORBITS.forEach(function (o) { drawRing(o.deg); });
    drawNucleus(t);

    iconEls.forEach(function (el, i) {
      var a  = ASSIGN[i];
      var angle = a.phase + t * ORBITS[a.orbit].speed;
      var pos = orbitPt(angle, ORBITS[a.orbit].deg);
      el.style.left = (pos.x - SZ / 2) + 'px';
      el.style.top  = (pos.y - SZ / 2) + 'px';
    });

    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener('resize', function () { resize(); });
  requestAnimationFrame(frame);

})();
