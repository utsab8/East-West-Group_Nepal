const fs = require('fs');
const path = require('path');

const directory = path.join('c:', 'Users', 'utsab', 'OneDrive', 'Desktop', 'seed company', 'src');

function processFile(filepath) {
    if (filepath.includes('Navbar.jsx')) return;
    
    let content = fs.readFileSync(filepath, 'utf8');

    // 1. Remove glowing background blobs (AI hallmark)
    content = content.replace(/<div\s+className="[^"]*blur-[^"]*"\s*\/>/g, '');
    content = content.replace(/<div\s+className="[^"]*blur-[^"]*"\s*>\s*<\/div>/g, '');
    
    // 2. Replace crazy custom shadows with clean corporate ones
    content = content.replace(/shadow-\[[^\]]+\]/g, 'shadow-sm');
    
    // 3. Simplify excessive rounding
    content = content.replace(/rounded-\[2\.5rem\]/g, 'rounded-lg');
    content = content.replace(/rounded-\[2rem\]/g, 'rounded-lg');
    content = content.replace(/rounded-3xl/g, 'rounded-lg');
    content = content.replace(/rounded-2xl/g, 'rounded-lg');
    content = content.replace(/rounded-\[100%\]/g, 'rounded-full');

    // 4. Remove text gradients
    content = content.replace(/text-transparent bg-clip-text bg-gradient-to-r from-growth-green to-harvest/g, 'text-growth-green');
    content = content.replace(/text-transparent bg-clip-text bg-gradient-to-br from-deep-green to-growth-green/g, 'text-deep-green');
    
    // 5. Remove glassmorphism (translucency and blurs)
    content = content.replace(/backdrop-blur(?:-(?:sm|md|lg|xl))?/g, '');
    content = content.replace(/border-white\/50/g, 'border-gray-200');
    content = content.replace(/border-white\/20/g, 'border-gray-200');
    content = content.replace(/bg-white\/90/g, 'bg-white');
    content = content.replace(/bg-white\/80/g, 'bg-white');
    content = content.replace(/bg-white\/50/g, 'bg-gray-50');
    content = content.replace(/bg-black\/50/g, 'bg-charcoal');
    content = content.replace(/border-8/g, 'border');
    
    // 6. Simplify background gradients
    content = content.replace(/bg-gradient-to-br from-meadow to-white/g, 'bg-white');
    content = content.replace(/bg-gradient-to-r from-harvest to-harvest-hover/g, 'bg-harvest');
    content = content.replace(/bg-gradient-to-r from-growth-green to-harvest/g, 'bg-growth-green');
    content = content.replace(/bg-gradient-to-t from-black\/80 via-transparent to-transparent/g, 'bg-black/60');

    // 7. Button styling updates (make them look less bubbly)
    content = content.replace(/rounded-xl/g, 'rounded-md');
    
    fs.writeFileSync(filepath, content, 'utf8');
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkDir(filepath);
        } else if (file.endsWith('.jsx')) {
            processFile(filepath);
        }
    }
}

walkDir(directory);
console.log("Cleanup completed.");
