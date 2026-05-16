import { makeSubject } from '../unitFactory';

export const subject = makeSubject({
  "slug": "mathematics-2",
  "title": "Mathematics-II",
  "code": "BS102/M-II",
  "semester": "sem-2",
  "credits": 4,
  "category": "Basic Science",
  "family": "math"
}, [
  {
    "title": "Determinants and Matrices",
    "syllabusTopics": [
      "Determinants of order 2 and 3",
      "Cramer rule",
      "Matrix types",
      "Matrix addition",
      "Matrix multiplication",
      "Adjoint",
      "Inverse matrix",
      "Linear equations"
    ]
  },
  {
    "title": "Coordinate Geometry 2D",
    "syllabusTopics": [
      "Cartesian coordinates",
      "Polar coordinates",
      "Straight lines",
      "Circles",
      "Parabola",
      "Ellipse",
      "Hyperbola",
      "Tangents and normals"
    ]
  },
  {
    "title": "Integral Calculus",
    "syllabusTopics": [
      "Indefinite integrals",
      "Substitution method",
      "Integration by parts",
      "Partial fractions",
      "Definite integrals",
      "Area under curve",
      "Engineering applications"
    ]
  },
  {
    "title": "Ordinary Differential Equations",
    "syllabusTopics": [
      "First order ODE",
      "Variable separable form",
      "Linear differential equation",
      "Homogeneous equation",
      "Second order constant coefficient equation",
      "Complementary function",
      "Particular integral"
    ]
  },
  {
    "title": "Partial Differentiation",
    "syllabusTopics": [
      "Partial derivatives",
      "Higher partial derivatives",
      "Homogeneous functions",
      "Euler theorem",
      "Total derivative",
      "Engineering rate change"
    ]
  },
  {
    "title": "Statistics and Probability",
    "syllabusTopics": [
      "Frequency distribution",
      "Mean median mode",
      "Standard deviation",
      "Variance",
      "Probability basics",
      "Addition theorem",
      "Multiplication theorem",
      "Normal distribution idea"
    ]
  }
]);

export default subject;
