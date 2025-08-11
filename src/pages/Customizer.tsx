import React, { useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useImage } from '@/hooks/useImage';
import baseWhite from '@/assets/layers/base-white.png';
import baseBlue from '@/assets/layers/base-blue.png';
import baseFloral from '@/assets/layers/base-floral.png';
import baseGrey from '@/assets/layers/base-grey.png';
import basePink from '@/assets/layers/base-pink.png';
import baseCollar from '@/assets/layers/collars/base-collar.png';
import buttonDownCollar from '@/assets/layers/collars/button-down.png';
import wingTipCollar from '@/assets/layers/collars/wing-tip.png';
import mandarinCollar from '@/assets/layers/collars/mandarin.png';
import singleButtonCuff from '@/assets/layers/cuffs/single-button.png';
import doubleButtonCuff from '@/assets/layers/cuffs/double-button.png';
import frenchCuff from '@/assets/layers/cuffs/french.png';
import angledPocket from '@/assets/layers/pockets/angled.png';
import roundedPocket from '@/assets/layers/pockets/rounded.png';
import concealedPlacket from '@/assets/layers/placket/concealed.png';

const Customizer = () => {
  const [selectedShirt, setSelectedShirt] = useState<string>('base-white');
  const [selectedCollar, setSelectedCollar] = useState<string>('none');
  const [selectedCuffStyle, setSelectedCuffStyle] = useState<string>('single-button');
  const [selectedPocketStyle, setSelectedPocketStyle] = useState<string>('angled');
  const [showPlacket, setShowPlacket] = useState<boolean>(false);

  // Preload images
  const baseWhiteImage = useImage(baseWhite);
  const baseBlueImage = useImage(baseBlue);
  const baseFloralImage = useImage(baseFloral);
  const baseGreyImage = useImage(baseGrey);
  const basePinkImage = useImage(basePink);
  const baseCollarImage = useImage(baseCollar);
  const buttonDownCollarImage = useImage(buttonDownCollar);
  const wingTipCollarImage = useImage(wingTipCollar);
  const mandarinCollarImage = useImage(mandarinCollar);
  const singleButtonCuffImage = useImage(singleButtonCuff);
  const doubleButtonCuffImage = useImage(doubleButtonCuff);
  const frenchCuffImage = useImage(frenchCuff);
  const angledPocketImage = useImage(angledPocket);
  const roundedPocketImage = useImage(roundedPocket);
  const concealedPlacketImage = useImage(concealedPlacket);

  const canvasSize = 350;

  // Collar styling configurations for different sizes and shapes
  const collarStyles = {
    'base-collar': { x: 125, y: 22, width: 100, height: 100 },
    'button-down': { x: 120, y: 15, width: 110, height: 115 },
    'wing-tip': { x: 120, y: 25, width: 110, height: 105 },
    'mandarin': { x: 112, y: 20, width: 125, height: 105 },
  };

  // Pocket styling configurations (single chest pocket)
  const pocketStyles = {
    'angled': { x: 205, y: 125, width: 50, height: 60 },
    'rounded': { x: 205, y: 125, width: 50, height: 50 },
  } as const;

  // Cuffs styling configurations for different cuff types
  const cuffsStyles = {
    'single-button': {
      'left-cuff': { 
        x: 20, 
        y: 268, 
        width: 50, 
        height: 35
      },
      'right-cuff': { 
        x: 277, 
        y: 268, 
        width: 50, 
        height: 35
      },
    },
    'double-button': {
      'left-cuff': { 
        x: 19, 
        y: 270, 
        width: 53, 
        height: 33
      },
      'right-cuff': { 
        x: 275, 
        y: 270, 
        width: 54, 
        height: 33
      },
    },
    'french': {
      'left-cuff': { 
        x: 20, 
        y: 268, 
        width: 50, 
        height: 35
      },
      'right-cuff': { 
        x: 278, 
        y: 268, 
        width: 50, 
        height: 35
      },
    },
  };

  // Placket styling configurations (center front)
  const placketStyles = {
    concealed: { x: 147, y: 65, width: 55, height: 258 },
  } as const;

  // Get the current shirt image based on selection
  const getCurrentShirtImage = () => {
    switch (selectedShirt) {
      case 'base-white':
        return baseWhiteImage;
      case 'base-blue':
        return baseBlueImage;
      case 'base-floral':
        return baseFloralImage;
      case 'base-grey':
        return baseGreyImage;
      case 'base-pink':
        return basePinkImage;
      default:
        return baseWhiteImage;
    }
  };

  // Get the current collar image based on selection
  const getCurrentCollarImage = () => {
    switch (selectedCollar) {
      case 'base-collar':
        return baseCollarImage;
      case 'button-down':
        return buttonDownCollarImage;
      case 'wing-tip':
        return wingTipCollarImage;
      case 'mandarin':
        return mandarinCollarImage;
      default:
        return null;
    }
  };

  // Get the current collar styling
  const getCurrentCollarStyle = () => {
    return collarStyles[selectedCollar as keyof typeof collarStyles] || { x: 0, y: 0, width: 0, height: 0 };
  };

  // Get the current pocket image based on selection
  const getCurrentPocketImage = () => {
    switch (selectedPocketStyle) {
      case 'none':
        return null;
      case 'angled':
        return angledPocketImage;
      case 'rounded':
        return roundedPocketImage;
      default:
        return null;
    }
  };

  // Get the current pocket styling
  const getCurrentPocketStyle = () => {
    return pocketStyles[selectedPocketStyle as keyof typeof pocketStyles] || pocketStyles['angled'];
  };

  // Get current placket image based on toggle
  const getCurrentPlacketImage = () => {
    if (!showPlacket) return null;
    return concealedPlacketImage;
  };

  // Get current placket styling
  const getCurrentPlacketStyle = () => {
    return placketStyles.concealed;
  };

  // Get the current cuff image based on selection
  const getCurrentCuffImage = () => {
    switch (selectedCuffStyle) {
      case 'none':
        return null;
      case 'single-button':
        return singleButtonCuffImage;
      case 'double-button':
        return doubleButtonCuffImage;
      case 'french':
        return frenchCuffImage;
      default:
        return singleButtonCuffImage;
    }
  };

  // Get the current cuff styling
  const getCurrentCuffStyle = () => {
    return cuffsStyles[selectedCuffStyle as keyof typeof cuffsStyles] || cuffsStyles['single-button'];
  };

  const currentShirtImage = getCurrentShirtImage();
  const currentCollarImage = getCurrentCollarImage();
  const currentCollarStyle = getCurrentCollarStyle();
  const currentPocketImage = getCurrentPocketImage();
  const currentPocketStyle = getCurrentPocketStyle();
  const currentPlacketImage = getCurrentPlacketImage();
  const currentPlacketStyle = getCurrentPlacketStyle();
  const currentCuffImage = getCurrentCuffImage();
  const currentCuffStyle = getCurrentCuffStyle();

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={0} onCartOpen={() => {}} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Shirt Customizer</h1>
          <p className="text-lg text-muted-foreground">
            Customize your shirt design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Canvas with React Konva */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="border-2 border-border rounded-lg overflow-hidden shadow-lg">
                  <Stage width={canvasSize} height={canvasSize}>
                    <Layer>
                      {/* Selected shirt color */}
                      {currentShirtImage && (
                        <Image
                          image={currentShirtImage}
                          x={0}
                          y={0}
                          width={canvasSize}
                          height={canvasSize}
                        />
                      )}

                      {/* Placket - centered along button line */}
                      {currentPlacketImage && (
                        <Image
                          image={currentPlacketImage}
                          x={currentPlacketStyle.x}
                          y={currentPlacketStyle.y}
                          width={currentPlacketStyle.width}
                          height={currentPlacketStyle.height}
                        />
                      )}

                      {/* Collar - only visible when a collar is selected */}
                      {currentCollarImage && (
                        <Image
                          image={currentCollarImage}
                          x={currentCollarStyle.x}
                          y={currentCollarStyle.y}
                          width={currentCollarStyle.width}
                          height={currentCollarStyle.height}
                        />
                      )}

                       {/* Chest Pocket */}
                       {currentPocketImage && (
                         <Image
                           image={currentPocketImage}
                           x={currentPocketStyle.x}
                           y={currentPocketStyle.y}
                           width={currentPocketStyle.width}
                           height={currentPocketStyle.height}
                         />
                       )}

                      {/* Left Cuff */}
                      {currentCuffImage && (
                        <Image
                          image={currentCuffImage}
                          x={currentCuffStyle['left-cuff'].x}
                          y={currentCuffStyle['left-cuff'].y}
                          width={currentCuffStyle['left-cuff'].width}
                          height={currentCuffStyle['left-cuff'].height}
                        />
                      )}

                      {/* Right Cuff */}
                      {currentCuffImage && (
                        <Image
                          image={currentCuffImage}
                          x={currentCuffStyle['right-cuff'].x}
                          y={currentCuffStyle['right-cuff'].y}
                          width={currentCuffStyle['right-cuff'].width}
                          height={currentCuffStyle['right-cuff'].height}
                        />
                      )}


                    </Layer>
                  </Stage>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Shirt, Collar, and Cuffs Selection */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Shirt Color Selection */}
                <div className="space-y-2">
                  <Label htmlFor="shirt-select" className="text-base font-medium">
                    Shirt Color
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred shirt color
                  </p>
                  <Select value={selectedShirt} onValueChange={setSelectedShirt}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a shirt color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="base-white">White</SelectItem>
                      <SelectItem value="base-blue">Blue</SelectItem>
                      <SelectItem value="base-floral">Floral Pattern</SelectItem>
                      <SelectItem value="base-grey">Grey Striped</SelectItem>
                      <SelectItem value="base-pink">Pink</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Collar Selection Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="collar-select" className="text-base font-medium">
                    Collar Style
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred collar style
                  </p>
                  <Select value={selectedCollar} onValueChange={setSelectedCollar}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a collar style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Collar</SelectItem>
                      <SelectItem value="base-collar">Classic Collar</SelectItem>
                      <SelectItem value="button-down">Button Down</SelectItem>
                      <SelectItem value="wing-tip">Wing Tip</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Cuff Style Selection */}
                <div className="space-y-2">
                  <Label htmlFor="cuff-style-select" className="text-base font-medium">
                    Cuff Style
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred cuff style
                  </p>
                  <Select value={selectedCuffStyle} onValueChange={setSelectedCuffStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a cuff style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Cuff</SelectItem>
                      <SelectItem value="single-button">Single Button</SelectItem>
                      <SelectItem value="double-button">Double Button</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                 {/* Pocket Style Selection */}
                 <div className="space-y-2">
                   <Label htmlFor="pocket-style-select" className="text-base font-medium">
                     Pocket Style
                   </Label>
                   <p className="text-sm text-muted-foreground">
                     Choose your preferred chest pocket
                   </p>
                   <Select value={selectedPocketStyle} onValueChange={setSelectedPocketStyle}>
                     <SelectTrigger>
                       <SelectValue placeholder="Select a pocket style" />
                     </SelectTrigger>
                     <SelectContent>
                      <SelectItem value="none">No Pocket</SelectItem>
                       <SelectItem value="angled">Angled</SelectItem>
                       <SelectItem value="rounded">Rounded</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>

                  {/* Placket Toggle */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label htmlFor="placket-toggle" className="text-base font-medium">
                          Concealed Placket
                        </Label> 
                      </div>
                      <Switch
                        id="placket-toggle"
                        checked={showPlacket}
                        onCheckedChange={setShowPlacket}
                      />
                    </div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Customizer;
