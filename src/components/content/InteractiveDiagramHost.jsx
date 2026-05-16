'use client';

import { lazy, Suspense } from 'react';

const components = {
  PulleyBlock: lazy(() => import('../diagrams/InteractivePulley')),
  GearTrain: lazy(() => import('../diagrams/InteractiveGearTrain')),
  BeltDrive: lazy(() => import('../diagrams/InteractiveBeltDrive')),
  CamFollower: lazy(() => import('../diagrams/InteractiveCamFollower')),
  Governor: lazy(() => import('../diagrams/InteractiveGovernor')),
  SFDBMD: lazy(() => import('../diagrams/InteractiveSFDBMD')),
  MohrCircle: lazy(() => import('../diagrams/InteractiveMohrCircle')),
  PVDiagram: lazy(() => import('../diagrams/InteractivePVDiagram')),
  Friction: lazy(() => import('../diagrams/InteractiveFriction')),
  Centroid: lazy(() => import('../diagrams/InteractiveCentroid')),
  StressStrain: lazy(() => import('../diagrams/InteractiveStressStrain')),
  FluidFlow: lazy(() => import('../diagrams/InteractiveFluidFlow')),
  SliderCrank: lazy(() => import('../diagrams/InteractiveSliderCrank')),
};

export default function InteractiveDiagramHost({ spec }) {
  if (!spec?.type) return null;
  const Diagram = components[spec.type] || components.PulleyBlock;

  return (
    <Suspense fallback={<div className="diagram-loading">Loading interactive diagram...</div>}>
      <Diagram spec={spec} />
      {spec.description && <p className="diagram-note">{spec.description}</p>}
    </Suspense>
  );
}
