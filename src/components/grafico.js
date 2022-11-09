import { Chart } from 'react-google-charts';

export const options = {
  chart: {
    title: 'Geração de energia dentro das últimas 24 horas.',
  },
  width: '100%',
  height: 400,
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: 'Temps' },
    1: { axis: 'Daylight' },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: 'Geração de energia (kWh)' }
    },
  },
};

export default function Grafico(props) {
  const { data } = props;

  return (
    <Chart
      chartType='Line'
      width='100%'
      height='400px'
      data={data}
      options={options}
    />
  );
}
