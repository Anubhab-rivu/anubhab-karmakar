import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "mathematics-1",
  "title": "Mathematics-I",
  "code": "BS101",
  "semester": "sem-1",
  "credits": 3,
  "category": "Basic Science",
  "family": "math"
}, [
  {
    "title": "Algebra",
    "syllabusTopics": [
      "Quadratic equations and discriminant",
      "Nature of roots",
      "Sum and product of roots",
      "Partial fractions with linear factors",
      "Repeated and irreducible quadratic factors",
      "Arithmetic progression",
      "Geometric progression",
      "Harmonic mean",
      "Complex numbers in Cartesian form",
      "Polar form and Euler form",
      "De Moivre theorem"
    ],
    "interactiveType": "Centroid"
  },
  {
    "title": "Trigonometry",
    "syllabusTopics": [
      "Compound angle formulae",
      "Multiple angle formulae",
      "Sub-multiple angle formulae",
      "Sum-to-product formulae",
      "Product-to-sum formulae",
      "Inverse trigonometric functions",
      "Principal values",
      "Solution of triangles"
    ],
    "interactiveType": "PVDiagram"
  },
  {
    "title": "Coordinate Geometry",
    "syllabusTopics": [
      "Distance formula",
      "Internal and external section formula",
      "Centroid formula",
      "Straight line forms",
      "Angle between two lines",
      "Perpendicular distance from point to line",
      "Circle standard equation",
      "Circle general equation",
      "Line-circle intersection",
      "Tangent to circle"
    ],
    "interactiveType": "Centroid"
  },
  {
    "title": "Differential Calculus-I",
    "syllabusTopics": [
      "Limits and standard limits",
      "L Hospital rule",
      "Continuity and discontinuity",
      "Differentiation from first principles",
      "Standard derivatives",
      "Chain rule",
      "Product rule",
      "Quotient rule",
      "Proof of differentiation rules"
    ],
    "interactiveType": "StressStrain"
  },
  {
    "title": "Differential Calculus-II",
    "syllabusTopics": [
      "Higher-order derivatives",
      "Implicit differentiation",
      "Parametric differentiation",
      "Logarithmic differentiation",
      "Tangent and normal",
      "Maxima and minima",
      "Increasing and decreasing functions",
      "Engineering optimization applications"
    ],
    "interactiveType": "CamFollower"
  }
]);

export default subject;
