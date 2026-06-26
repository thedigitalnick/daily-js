const firm = "Levin & Perconti";
const year = 2026;
const heading = `${firm}, established ${year}` // no need for "+" concatenation
console.log(heading);

const slug = "Our Practice Areas".toLowerCase().replace(/\s+/g, "-");
console.log(slug)

const permalinkTitle = "North Carolina Car Accident Lawyer".toLowerCase().replace(/\s+/g, "-");
console.log(permalinkTitle)

const tagline = "Levin & Perconti - North Carolina Car Accident Lawyer - 100 years!!!!".toLowerCase().replace(/[^a-z0-9-]/g, "")
console.log(tagline)