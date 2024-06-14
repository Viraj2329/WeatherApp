import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1572455857811-045fb4255b5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox bg-gray-100 p-4 rounded-lg shadow-md flex justify-center items-center ">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          title="green iguana"
        />
        <CardContent className="text-center">
          <Typography gutterBottom variant="h5" component="div" className="font-bold text-xl mb-2">
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon className="inline-block ml-2" /> : info.temp > 15 ? <WbSunnyIcon className="inline-block ml-2" /> : <AcUnitIcon className="inline-block ml-2" />}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"} className="text-sm">
            <p className="mb-1">Temperature = {info.temp}</p>
            <p className="mb-1">Humidity = {info.humidity}</p>
            <p className="mb-1">Min. Temp. = {info.tempMin}</p>
            <p className="mb-1">Max Temp. = {info.tempMax}</p>
            <p className="mb-1">The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
