type Research = {
  title: string;
  authors: string;
  type: string;
  description: string;
  tags: string[];
  image: string;
};

export const researchPapers: Research[] = [
    {
      title: "Matrix Concentration Inequalities and Free Probability II. Two-sided Bounds and Applications",
      authors: "Afonso Bandeira, Giorgio Cipolloni, Ramon van Handel, Dominik Schröder",
      type: "preprint (2024)",
      description: "We determine the approximate location of the extreme eigenvalues for a large class of random matrix models. These two-sided bounds are fundamentally beyond the reach of classical matrix concentration inequalities.",
      tags: ["free probability"],
      image: "/imgs/r1.jpg"
    },
    {
      title: "Asymptotics of Learning with Deep Structured (Random) Features",
      authors: "Dominik Schröder, Hugo Cui, Daniil Dmitriev, Bruno Loureiro",
      type: "ICML 2024 (2024)",
      description: "We derive an approximate formula for the generalization error of deep neural networks with structured (random) features, confirming a widely believed conjecture. We also show that our results can capture feature maps learned by deep, finite-width networks.",
      tags: ["deep learning", "random features"],
      image: "/imgs/r2.jpg"
    }, 
    {
      title: "Deterministic equivalent and error universality of deep random features learning",
      authors: "Dominik Schröder, Hugo Cui, Daniil Dmitriev, Bruno Loureiro",
      type: "ICML (2023)",
      description: "We show that the generalization error of deep random feature models is the same as the generalization error of Gaussian features with matched covariance, and derive an explicit expression for the generalization error.",
      tags: ["ml"],
      image: "/imgs/r3.jpg"
    },
    {
      title: "Central limit theorem for linear eigenvalue statistics of non-Hermitian random matrices",
      authors: "Giorgio Cipolloni, László Erdős, Dominik Schröder",
      type: "Comm. Pure Appl. Math. (2024)",
      description: "We show that the linear statistics of random matrices with IID entries asymptotically are a rank-one perturbation of the Gaussian free field on the unit disc.",
      tags: ["gff", "universality"],
      image: "/imgs/r4.jpg"
    }
];