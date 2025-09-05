import Spline from '@splinetool/react-spline';
import '../styles/SplineGhost.css';

export default function SplineGhost() {
  return (
    <main className="spline-ghost">
      <Spline
        scene="https://prod.spline.design/2QosnLePckaMuVGh/scene.splinecode" 
      />
    </main>
  );
}
