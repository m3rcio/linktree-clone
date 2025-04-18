let mongoose=require("mongoose")
const url='mongodb://127.0.0.1:27017/bioshare';


async function connectDB() {
    try {
      await mongoose.connect(url, {
      });
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection error:', error);
      process.exit(1);
    }
  }
connectDB();


const socialLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: function () {
      return this.isNew;
    },
    default: "",
  },
  Url: {
    type: String,
    required: function () {
      return this.isNew;
    },
    default: "",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: false,
  },
  user_id: {
    type: String,
    required: function () {
      return this.isNew;
    },
  },
});

const SocialLink = mongoose.model("SocialLink", socialLinkSchema);

module.exports = SocialLink;
