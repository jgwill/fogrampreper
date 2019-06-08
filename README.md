# fogrampreper
@STCGoal fogrampreper Prepare the shooting for Photogrammetric actions such as creating the footage low res for evaluating the Point cloud visually just by inserting the shooting media along with preping repo of the shooting for hi-rez processing

## --@STCGoal A low energy ARM system to preprocess, view point cloud from shooting.  You view the point cloud, you can 3D navigate on it
* AliceVision is compiling on the PI. [view run_build.sh](./AliceVision/run_build.sh)
```bash
# --@urir https://github.com/alicevision/AliceVision/blob/develop/INSTALL.md

mkdir fogrampreper && cd $_


# git clone --recursive...
git clone https://github.com/alicevision/AliceVision.git --recursive
mkdir build && cd build
cmake -DALICEVISION_BUILD_DEPENDENCIES=ON -DCMAKE_INSTALL_PREFIX=$PWD/../install ../AliceVision
make -j10

```