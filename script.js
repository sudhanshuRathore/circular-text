const degreeToRadian = angle => {
    return angle * (Math.PI / 180);
}

const pointOnCircle = (radius, angle = 0) => {
    const xPos = radius * Math.cos(degreeToRadian(angle));
    const yPos = radius * Math.sin(degreeToRadian(angle));
    return {
        x: xPos,
        y: yPos
    }
}

const radius = 200;
const diameter = radius * 2;

const circle = document.querySelector('#circular-text');

circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.innerText;
const characters = text.split('');
circle.innerText = null;

const startAngle = -90;
const endAngle = 270;
const angleRange = endAngle - startAngle;

const deltaAngle = angleRange / characters.length;
let currentAngle = startAngle;

characters.forEach((char, index) => {
    const charElement = document.createElement('span');
    charElement.innerText = char;
    circle.appendChild(charElement);

    let { x: xPos, y: yPos } = pointOnCircle(radius, currentAngle);
    
    /**
     * Move center of drawn circle to 
     * match parents center.
     */
    xPos += radius;
    yPos += radius;

    const translate = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;

    charElement.style.transform = `${translate} ${rotate}`;

    currentAngle += deltaAngle;
});