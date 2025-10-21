const DataBackground = () => {
  // Generate line chart data
  const generateLineChart = (startX: number, startY: number, points: number, color: string) => {
    let path = `M ${startX} ${startY}`;
    const pointCoords: { x: number; y: number }[] = [{ x: startX, y: startY }];
    
    for (let i = 1; i < points; i++) {
      const x = startX + (i * 3);
      const y = startY + (Math.sin(i * 0.5) * 8 + Math.random() * 6 - 3);
      path += ` L ${x} ${y}`;
      pointCoords.push({ x, y });
    }
    return { path, color, pointCoords };
  };

  const lineCharts = [
    generateLineChart(5, 15, 15, 'hsl(var(--primary))'),
    generateLineChart(5, 85, 15, 'hsl(var(--marketing-green))'),
    generateLineChart(55, 12, 15, 'hsl(var(--marketing-cyan))'),
    generateLineChart(55, 88, 15, 'hsl(var(--marketing-purple))'),
  ];

  // Generate bar chart data
  const barChart1 = Array.from({ length: 8 }, (_, i) => ({
    x: 8 + i * 4,
    height: Math.random() * 12 + 4,
  }));

  const barChart2 = Array.from({ length: 8 }, (_, i) => ({
    x: 60 + i * 4,
    height: Math.random() * 12 + 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ filter: 'blur(0.5px)' }}
      >
        {/* Grid background */}
        <defs>
          <pattern
            id="grid"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="0.1"
              opacity="0.06"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />

        {/* Line Charts with data points */}
        {lineCharts.map((chart, i) => (
          <g key={`chart-${i}`}>
            <path
              d={chart.path}
              fill="none"
              stroke={chart.color}
              strokeWidth="0.3"
              opacity="0.12"
            />
            {/* Data points on line */}
            {chart.pointCoords.map((point, j) => (
              <circle
                key={`point-${i}-${j}`}
                cx={point.x}
                cy={point.y}
                r="0.3"
                fill={chart.color}
                opacity="0.13"
              />
            ))}
          </g>
        ))}

        {/* Bar Chart 1 (top left area) */}
        <g>
          {barChart1.map((bar, i) => (
            <rect
              key={`bar1-${i}`}
              x={bar.x}
              y={30 - bar.height}
              width="2.5"
              height={bar.height}
              fill="hsl(var(--primary))"
              opacity="0.12"
            />
          ))}
          {/* X and Y axis */}
          <line x1="6" y1="30" x2="42" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="0.2" opacity="0.12" />
          <line x1="6" y1="10" x2="6" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="0.2" opacity="0.12" />
        </g>

        {/* Bar Chart 2 (bottom right area) - Orange */}
        <g>
          {barChart2.map((bar, i) => (
            <rect
              key={`bar2-${i}`}
              x={bar.x}
              y={78 - bar.height}
              width="2.5"
              height={bar.height}
              fill="hsl(var(--marketing-orange))"
              opacity="0.12"
            />
          ))}
          {/* X and Y axis */}
          <line x1="58" y1="78" x2="94" y2="78" stroke="hsl(var(--muted-foreground))" strokeWidth="0.2" opacity="0.12" />
          <line x1="58" y1="58" x2="58" y2="78" stroke="hsl(var(--muted-foreground))" strokeWidth="0.2" opacity="0.12" />
        </g>

        {/* Pie Chart (top right) */}
        <g transform="translate(75, 20)">
          <circle cx="0" cy="0" r="7" fill="none" stroke="hsl(var(--marketing-cyan))" strokeWidth="3.5" strokeDasharray="11 33" opacity="0.11" />
          <circle cx="0" cy="0" r="7" fill="none" stroke="hsl(var(--marketing-green))" strokeWidth="3.5" strokeDasharray="15 29" strokeDashoffset="-11" opacity="0.11" />
          <circle cx="0" cy="0" r="7" fill="none" stroke="hsl(var(--marketing-pink))" strokeWidth="3.5" strokeDasharray="18 26" strokeDashoffset="-26" opacity="0.11" />
        </g>

        {/* Growth Arrow (center right) */}
        <g>
          <path
            d="M 70 45 L 75 50 L 78 46 L 82 50 L 85 44"
            fill="none"
            stroke="hsl(var(--marketing-green))"
            strokeWidth="0.4"
            opacity="0.13"
          />
          <path d="M 85 44 L 83 44 L 83 46 Z" fill="hsl(var(--marketing-green))" opacity="0.13" />
        </g>

        {/* Funnel illustration (bottom center) */}
        <g transform="translate(40, 65)">
          <rect x="0" y="0" width="8" height="3" fill="hsl(var(--marketing-purple))" opacity="0.10" />
          <rect x="1" y="4" width="6" height="3" fill="hsl(var(--marketing-purple))" opacity="0.11" />
          <rect x="2" y="8" width="4" height="3" fill="hsl(var(--marketing-purple))" opacity="0.12" />
        </g>

        {/* Scatter plot (top right) - Pink */}
        {Array.from({ length: 25 }, (_, i) => (
          <circle
            key={`scatter-${i}`}
            cx={65 + Math.random() * 20}
            cy={15 + Math.random() * 15}
            r="0.25"
            fill="hsl(var(--marketing-pink))"
            opacity="0.13"
          />
        ))}

        {/* Scatter plot (bottom left) - Cyan */}
        {Array.from({ length: 25 }, (_, i) => (
          <circle
            key={`scatter2-${i}`}
            cx={15 + Math.random() * 20}
            cy={70 + Math.random() * 15}
            r="0.25"
            fill="hsl(var(--marketing-cyan))"
            opacity="0.13"
          />
        ))}
      </svg>
    </div>
  );
};

export default DataBackground;